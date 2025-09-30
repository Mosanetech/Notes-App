import {NextPage} from 'next';
import Link from 'next/link';

const FooterLinks: NextPage = () => {
    return (
        <div className={'flex-1 flex flex-col gap-6 md:flex-row md:justify-around'}>
            {/*Quick Links*/}
            <div className={'flex flex-col gap-2'}>
                <h5>Quick Links</h5>
                <div className={'flex flex-col gap-2'}>
                    <Link href={'/browse-notes'} className={'text-sm'}> Browse Notes </Link>
                    <Link href={'/upload'} className={'text-sm'}> Upload </Link>
                    <Link href={'/auth/login'} className={'text-sm'}> Login </Link>
                    <Link href={'/auth/signup'} className={'text-sm'}> Sign Up </Link>
                </div>
            </div>

            {/*Support*/}
            <div className={'flex flex-col gap-2'}>
                <h5> Support </h5>
                <div className={'flex flex-col gap-2'}>
                    <Link href={'/about'} className={'text-sm'}> About </Link>
                    <Link href={'/contact'} className={'text-sm'}> Contact </Link>
                    <Link href={'/terms-privacy'} className={'text-sm'}> Terms & Privacy </Link>
                    <Link href={'/help'} className={'text-sm'}> Help Center </Link>
                </div>
            </div>
        </div>
    )
}

export default FooterLinks;