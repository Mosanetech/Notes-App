import { NextResponse } from "next/server";

export async function POST(req:Request) {
    try{
        const {username, first_name, last_name, password, confirm_password, email, phone_number} = await req.json();

        if (!username || !first_name || !last_name || !password || !confirm_password) {
            return NextResponse.json({ detail: "All fields are required: username, first name, last name, password, and confirm password." },
            { status: 400 }
        )};

        if(!email && !phone_number){
            return NextResponse.json({detail:"Please provide either an email or a phone number."},{status:400});
        }

        if(password !== confirm_password){
            return NextResponse.json({detail:'Password does not match'},{status:400});
        }

        if(password.length < 8){
            return NextResponse.json({detail:'Password must be atleast 8 characters long.'},{status:400})
        }

        //sending data to real api
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/register/`,{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({username, first_name, last_name, password, confirm_password, email, phone_number}),
        });

        const data = await res.json();

        if(!res.ok){
            return NextResponse.json({ error: data.detail || "Login failed" }, { status: res.status });
        }


        return NextResponse.json(data);
    }catch(error){
        if(process.env.NODE_ENV !== 'production'){
            console.log('Signup Error',error);
        }
        return NextResponse.json({detail:"Internal server error"},{status:500});
    }
}