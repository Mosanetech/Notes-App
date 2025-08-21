import { NextPage } from "next";
import { title } from "process";

export const metadata = {
  title: 'SchoolNotes',
  description:'Welcome to schoolNotes - your space to organize, share, and manage notes effortlessly.'
}

const Home: NextPage = () => {
  return(
    <div>
      <h1 className="font-heading">Welcome to SchoolNotes</h1>
      <p>
        Home
      </p>
    </div>
  )
}

export default Home