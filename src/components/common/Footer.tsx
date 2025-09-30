import {NextPage} from "next";
import FooterHero from "@/components/common/FooterHero";
import FooterLinks from "@/components/common/FooterLinks";
import Link from "next/link";

const Footer: NextPage = () => {
    return (
        <div className={'p-4 border-t bg-secondary '}>
            <div className={'flex flex-col gap-6 md:flex-row md:justify-around md:max-w-[1200px] mx-auto'}>
                <FooterHero />
                <FooterLinks />
            </div>
            {/*all rights*/}
            <div className={'w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between border-t py-5'}>
                <p className={'text-sm'}>© 2024 SchoolNotes. All rights reserved.</p>
                <p className={'flex items-center gap-4'}>
                    <Link href={'/privacy-policy'} className={'text-xs'}>Privacy Policy</Link>
                    <Link href={'/terms-of-service'} className={'text-xs'}>Terms of service</Link>
                </p>
            </div>
        </div>
    )
}

export default Footer;