import Link from "next/link";
import Image from 'next/image'

export const ProjectPage  = ({title, category, year, imageSource}) => {

  return (
    <div className="">
        <p>
            {title}
        </p>
        <p className='text-sm'>
            {category} {year}
        </p>
        <div className='relative h-[30vh]'>
            <Image objectFit='cover' layout='fill' src={imageSource} alt=''/>
        </div>
    </div>
  )

};