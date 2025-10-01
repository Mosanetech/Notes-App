import {NextPage} from "next";
import {Upload,FolderOpen,Users } from "lucide-react";

const GetStarted: NextPage = () => {

    const steps = [
        {
            step: 1,
            icon: <Upload className={'mx-auto  h-10 w-10 text-white p-2 rounded-full'}/>,
            title: 'Upload Notes',
            description: 'Share your study materials by uploading PDF notes to help fellow students.'
        },
        {
            step: 2,
            icon: <FolderOpen className={'mx-auto h-10 w-10 text-white p-2 rounded-full'}/>,
            title: 'Organize',
            description: 'Browse and search through categorized notes by subject, course, and topic.'
        },
        {
            step: 3,
            icon: <Users className={'mx-auto h-10 w-10 text-white p-2 rounded-full'}/>,
            title: 'Study Together',
            description: 'Access quality study materials from your peers and accelerate your learning.'
        }
    ];

    return (
        <div className={'bg-secondary px-4 py-20 text-center'}>
            <div>
                <h3 className={'mb-6'}>
                    How It Works
                </h3>
                <p className={'mb-6 text-sm md:text-lg max-w-[700px] mx-auto'}>
                    Get started with SchoolNotes in three simple steps and join a community of learners sharing knowledge.
                </p>
            </div>

            {/* Steps Section */}
            <div className={'grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'}>
                {steps.map(({step, icon, title, description}) => (
                    <div key={step} >
                        <div className={'flex flex-col justify-center w-24 h-24 mb-4 shadow-lg border border-gray-200 rounded-full bg-white mx-auto'}>

                            <div className={'relative border w-16 h-16 mx-auto rounded-full flex items-center justify-center bg-highlight'}>
                                {icon}
                                <div className={'absolute left-5 -top-6 bg-highlight text-white rounded-full h-6 w-6 flex items-center justify-center text-xs font-bold'}>
                                    {step}
                                </div>
                            </div>

                        </div>
                        <h4 className={'mb-2 text-lg font-semibold'}>
                            {title}
                        </h4>
                        <p className={'text-sm text-gray-600'}>
                            {description}
                        </p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default GetStarted;