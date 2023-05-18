import Link from "next/link";
import Image from 'next/image'

export const ImageGallery  = ({image}) => {

  return (
    <div className='image-gallery'>
        <img src={`/images/film/${image}`} alt=''/>
    </div>
  )

};