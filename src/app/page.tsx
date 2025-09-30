import { NextPage } from "next";
import {Metadata} from "next";
import {Button} from "@/components/ui/button";

export const metadata: Metadata = {
  title: 'Welcome SchoolNotes',
  description:'Welcome to schoolNotes - your space to organize, share, and manage notes effortlessly.'
}

const Home: NextPage = () => {
  return(
    <div className="text-center pt-20">
      <h1 className="font-heading mb-4">
        <span className="block md:inline">Welcome to</span> 
        <span>SchoolNotes app</span>
      </h1>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>
      <p>
        Share and access school notes easily, anytime, anywhere.
      </p>
      <p>
        <button className="mt-2">Explore Notes</button>
          <Button variant={'primary'}>Gray</Button>
      </p>

        <div className={'card card-hover card-elevated'}>
            <p>Jays</p>
            <p className={'text-sm'}>Try again</p>
            <p className={'text-xs'}>Go ahead</p>
        </div>
        <p className={'card-hover card-compact'}>
            1521
        </p>
        <p className={'card-hover'}>
            1521
        </p>
        <a href={'/syh'}>gooo</a>

        <div className={'bg-[var(--bg-accent-primary)]'}>
            Tvduvua
        </div>
        <div className={'bg-[var(--bg-highlight)]'}>
            bibicb uhb sdb
        </div>
    </div>
  )
}

export default Home