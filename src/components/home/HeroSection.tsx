import {NextPage} from "next";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {BookOpen} from "lucide-react";

const HeroSection: NextPage = () => {
    return (
        <div className={'bg-secondary px-4 py-20'}>
            <div className={'flex flex-col gap-6 lg:flex-row items-center w-full max-w-[1200px] mx-auto'}>
                <div className={'flex flex-col gap-6'}>
                    <h2>
                        Find and Share Study Notes Easily
                    </h2>
                    <p className={'text-center text-md'}>
                        Access thousands of PDF study notes uploaded by students. Share your knowledge and help others succeed in their academic journey.
                    </p>

                    {/*Buttons*/}
                    <div className={'flex flex-col gap-2 sm:flex-row sm:justify-center'}>
                        <Link href={'/browse-notes'}>
                            <Button
                                className={'w-full sm:w-fit'}
                                variant={'primary'}>
                                Browse Notes
                            </Button>
                        </Link>

                        <Link href={'/upload'}>
                            <Button
                                className={'w-full sm:w-fit border-accent'}
                                variant={'inverted'}>
                                Upload Notes
                            </Button>
                        </Link>
                    </div>
                </div>

                {/*Image*/}
                <div className={'relative w-full sm:max-w-[1000px] mx-auto h-[400px] rounded-2xl'}>
                    <Image
                        src={'https://images.unsplash.com/photo-1560719887-fe3105fa1e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHN0dWR5aW5nJTIwbGlicmFyeSUyMGJvb2tzfGVufDF8fHx8MTc1OTIxNjc0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'}
                        alt={'hero image'}
                        fill
                        className={'object-cover w-full rounded-2xl shadow-lg'}
                    />
                    <div className={'absolute bg-gradient-to-t from-bg-black/70 via-bg-black/20 to-transparent inset-0 rounded-2xl'}></div>
                    <div className={'absolute right-4 bottom-4 border border-accent rounded-full p-1'}>
                        <BookOpen className={'accent-txt'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;