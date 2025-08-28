import { NextPage } from "next";
import Link from "next/link";
import { getSessionUser } from "@/utils/auth/getSessionUser";

const Header: NextPage = async () =>{
    const user = await getSessionUser();

    return(
        <div>
            <div className="header-custom fixed w-full top-0 flex justify-between p-6 items-center z-10">
                <Link href={'/'} className="text-white text-xl md:text-2xl">SchoolNotes</Link>
            {/* Left navigation */}
            <div className="flex gap-2">
            <Link href="/" className="text-white">Home</Link>
            <Link href="/notes" className="text-white">Notes</Link>

            {user ? (
                <Link href={`/profile/${user.user_id}`} className="text-white">
                Profile
                </Link>
            ) : (
                <Link href="/signup" className="text-white">
                Sign up
                </Link>
            )}
        </div>
            </div>
        </div>
    )
}

export default Header;