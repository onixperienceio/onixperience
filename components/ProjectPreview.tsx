import Link from "next/link";
import Image from 'next/image'

export const ProjectPreview  = ({title, category, year, image}) => {

  return (
    <div className="">
        <p className="font-display text-left">
            {title}
        </p>
        <div className="flex text-sm font-italic">
          <p className='capitalize'>
              {category}
          </p>&nbsp;
          <p>
            {year}
          </p>
        </div>
        <div className='relative sm:h-[40vh] h-[30vh] mt-1'>
            <Image objectFit='cover' layout='fill' src={`/images/${category}/${image}`} alt={title}/>
        </div>
    </div>
  )

};