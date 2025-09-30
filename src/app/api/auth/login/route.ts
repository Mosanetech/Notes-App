import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req:Request) {
    try{
        const {identifier, password} = await req.json();

        if(!identifier || !password) {
            return NextResponse.json({detail:'Missing Credentials'}, {status:400});
        }

        //foward request to real API
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login/`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({identifier, password})
        })

        const data = await res.json();

        if(!res.ok){
            return NextResponse.json(data, {status:res.status})
        }


        const {  access , refresh, username, email, phone_number } = data;

        //await cookies in next js 15
        const cookieStore = await cookies();
        //store in secure cookies
        cookieStore.set('access_token',access,{
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: "lax",
            path: '/',
            maxAge: 60 * 60, //1h
        });

        cookieStore.set('refresh_token', refresh, {
            httpOnly:true,
            secure: process.env.NODE_ENV === 'production',
            sameSite:'lax',
            path: '/',
            maxAge: 60 * 60 * 24 * 7, //7 days
        });
        
        return NextResponse.json({user: {username, email, phone_number}});
    }catch(error){
        if(process.env.NODE_ENV !== 'production'){
            console.log("Login error:",error);
        }
        return NextResponse.json({detail:'Internal server error'}, {status:500});
    }
}