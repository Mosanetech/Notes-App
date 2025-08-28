import { cookies } from "next/headers";

export async function getSessionUser() {
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value

    if(!token) return null;

    //decoding the JWT 
    try{
        const payload = JSON.parse(
            Buffer.from(token.split('.')[1], 'base64').toString()
        );
        return payload;
    }catch{
        return null;
    }
}