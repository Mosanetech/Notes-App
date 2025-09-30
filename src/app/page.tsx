import { NextPage } from "next";
import {Metadata} from "next";
import HeroSection from "@/components/home/HeroSection";

export const metadata: Metadata = {
  title: 'Welcome SchoolNotes',
  description:'Welcome to schoolNotes - your space to organize, share, and manage notes effortlessly.'
}

const Home: NextPage = () => {
  return(
    <div className="text-center">
        <HeroSection />
    </div>
  )
}

export default Home