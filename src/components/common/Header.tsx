import { NextPage } from "next";
import Link from "next/link";
import { getSessionUser } from "@/utils/auth/getSessionUser";
import {Button} from "@/components/ui/button";
import HeaderTabs from "@/components/common/HeaderTabs";
import {BookOpen, Menu} from "lucide-react";

const Header: NextPage = async () =>{
    const user = await getSessionUser();

    return(
        <div className={'fixed w-full top-0 z-100 bg-white backdrop-blur-sm border-b p-4'}>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  lg:text-center  flex justify-between items-center ">
                {/*Left Navigation*/}
                <Link href={'/'}>
                    <h3 className={'flex items-center gap-1 font-semibold'}>
                        <BookOpen className={'accent-txt'}/>
                        SchoolNotes
                    </h3>
                </Link>


                {/* Desktop right navigation */}
                <div className={'hidden md:flex items-center gap-8'}>

                    <HeaderTabs />

                    {/*Authentication */}
                    {user ? (
                        <Link href={`/profile/${user.user_id}`}>
                        Profile
                        </Link>
                    ) : (
                        <div className={'flex items-center gap-2'}>
                            <Link href="/auth/login">
                                <Button variant={'inverted'}>
                                    Login
                                </Button>
                            </Link>

                            <Link href="/auth/signup">
                                <Button variant={'primary'}>
                                    Sign up
                                </Button>

                            </Link>
                        </div>

                    )}
                 </div>
                {/*Mobile right navigation*/}
                <div className={'inline md:hidden'}>
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default Header;