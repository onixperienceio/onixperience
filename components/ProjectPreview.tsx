import Link from "next/link";
import Image from 'next/image'

export const ProjectPreview  = ({title, category, year, image}) => {

  return (
    <div className="">
        <p>
            {title}
        </p>
        <div className="flex text-sm">
          <p className='capitalize'>
              {category}
          </p>&nbsp;
          <p>
            {year}
          </p>
        </div>
        <div className='relative h-[40vh] mt-1'>
            <Image objectFit='cover' layout='fill' src={`/../public/images/${category}/${image}`} alt=''/>
        </div>
    </div>
  )

};