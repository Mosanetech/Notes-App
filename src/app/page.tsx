import { NextPage } from "next";
import {Metadata} from "next";
import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import GetStarted from "@/components/home/GetStarted";

export const metadata: Metadata = {
  title: 'Welcome SchoolNotes',
  description:'Welcome to schoolNotes - your space to organize, share, and manage notes effortlessly.'
}

const Home: NextPage = () => {
  return(
    <div className="text-center flex flex-col gap-10">
        <HeroSection />
        <CategorySection />
        <GetStarted />
    </div>
  )
}

export default Home