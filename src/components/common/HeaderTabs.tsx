'use client'
import {NextPage} from "next";
import {usePathname} from "next/navigation";
import Link from "next/link";

const HeaderTabs: NextPage = () => {
    const pathname = usePathname();

    return (
        <div className="flex gap-8 items-center">
            <Link href="/" className={`${pathname === '/' ?'highlight-txt':''}`}>Home</Link>
            <Link href="/browse-notes" className={`${pathname === '/browse-notes' ?'highlight-txt':''}`}>Browse Notes</Link>
            <Link href={'/upload'} className={`${pathname === '/upload' ?'highlight-txt':''}`}>Upload</Link>
        </div>
    )
}

export default HeaderTabs;