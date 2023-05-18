import Link from "next/link";
import Image from 'next/image'

export const ProjectPage  = ({title, category, year, imageCover, description}) => {

  return (
    <div className="">
        <p className="capitalize font-display">
            {title}
        </p>
        {/* <p className='text-sm capitalize font-italic'>
            {category} {year}
        </p> */}
        <br />
        <div className='mb-[2em]'>
          <img src={`/images/${category}/${imageCover}`} alt=''/>
        </div>
        <div className="">
          {description}
        </div>
        {/* <div className="relative h-[50vh] mb-[2em]">
          <Image objectFit='cover' layout='fill' src={`/images/${category}/${imageCover}`} alt=''/>
        </div> */}
    </div>
  )

};