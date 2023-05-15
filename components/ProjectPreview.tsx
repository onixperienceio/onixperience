import Link from "next/link";
import Image from 'next/image'

export const ProjectPreview  = ({title, category, year, image}) => {

  return (
    <div className="">
        <p className="font-display">
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
        <div className='relative h-[45vh] mt-1'>
            <Image objectFit='cover' layout='fill' src={`/images/${category}/${image}`} alt={`'`+{title}+`'`}/>
        </div>
    </div>
  )

};