import { NextPage } from "next";
import { Trash,Edit2 } from "lucide-react";


const ProfileComponent:NextPage = () => {
    const content = [
        {
            title:'Mathematics-Algebra Notes',
            description:'I put together a shared algebra note that covers key concepts like equations, functions, and polynomials with clear examples and steps'
        },
        {
            title: 'Human development-cognative thinking',
            description:'t’s a clear, concise guide to understanding how humans learn, solve problems, and make sense of the world over time.'
        },
        {
            title:'Cell to System: A Biology Breakdown',
            description: 'I mapped out the essentials of cell structure, genetics, and body systems with diagrams and clear examples.',
        },
        {
            title: 'Chemistry Essentials: From Atoms to Equations',
            description: 'It’s a clean reference for mastering the basics and solving problems with confidence.',
        },
        {
            title:'Neurobiology in Focus',
            description: 'It’s a clear look at how biology explains behavior and cognition.'
        }
    ]
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {content.map((item, index) => (
        <div
            key={index}
            className="border border-gray-500 rounded-md p-4 shadow-sm"
        >
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
            <div className="mt-2 flex items-center justify-between">
            <button className="btn-custom">View</button>
            <div className="flex gap-2">
                <Trash className="w-4 h-4 cursor-pointer hover:text-red-500" />
                <Edit2 className="w-4 h-4 cursor-pointer hover:text-blue-500" />
            </div>
            </div>
        </div>
        ))}
    </div>
    );

}

export default ProfileComponent;