import {NextPage} from "next";
import {BookOpen} from "lucide-react";

const FooterHero: NextPage = () => {
    return (
        <div>
            <h4 className={'flex items-center gap-1'}>
                <BookOpen className={'w-5 h-5 accent-txt'}/>
                SchoolNotes
            </h4>
            <p className={'text-sm w-full md:max-w-[350px]'}>
                A platform where students can share and access PDF study notes to support each other&#39;s academic success.
            </p>
        </div>
    )
}

export default FooterHero;