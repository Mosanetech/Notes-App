import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = await cookies();
    const access = cookieStore.get('access_token')?.value;

    if(!access) {
        return NextResponse.json({detail:'Not authenticated'},{status:401});
    }

    try{
    //forward request with authorization header
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/profile/`,{
        headers:{
            Authorization: `Bearer ${access}`,
        },
    });

    const data = await res.json();
    return NextResponse.json({status:res.status, data});
    }catch(err){
        console.error('Profile fetch error:',err);
        return NextResponse.json({detail:"Fetch failed"},{status:500});
    }

}