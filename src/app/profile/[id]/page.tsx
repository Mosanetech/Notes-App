import { NextPage } from "next";
import Image from "next/image";
import ProfileComponent from "@/components/profile/notesComponent";

interface Props {
    params: {id: string};
}

const Profile: NextPage <Props> = async ({params}) => {
    //fetch user data from RandomUser API
    const res = await fetch(`https://randomuser.me/api/?seed=${params.id}&results=1`, {
        cache: 'no-store',
    });
    if(!res.ok){
        throw new Error('Failed to fetch user data')
    }

    const data = await res.json();
    const user = data.results[0];
    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <Image
            src={user.picture.large || '/profileplaceholder.png'}
            alt={`${user.name.first} ${user.name.last}`}
            width={100}
            height={100}
            className="rounded-full"
            />
            
            <h2>{user.name.first} {user.name.last}</h2>
            <p>
                {user.name.first} is a {user.dob.age}-year-old from {user.location.country}.loves clean UIs and Collaborative coding.
            </p>
            <div className="w-full max-w-md">
            <div className="relative">
                <input
                type="search"
                placeholder="Search your notes..."
                className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
                <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
            </div>
            </div>

            <ProfileComponent />
        </div>
    );
};

export default Profile;