import { NextPage } from "next";

export const metadata = {
  title: 'SchoolNotes',
  description:'Welcome to schoolNotes - your space to organize, share, and manage notes effortlessly.'
}

const Home: NextPage = () => {
  return(
    <div className="text-center pt-20">
      <h1 className="font-heading mb-4">
        <span className="block md:inline">Welcome to</span> 
        <span>SchoolNotes app</span>
      </h1>
      <p>
        Share and access school notes easily, anytime, anywhere.
      </p>
      <p>
        <button className="btn-custom mt-2">Explore Notes</button>
      </p>
    </div>
  )
}

export default Home