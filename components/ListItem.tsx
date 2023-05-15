import Image from 'next/image'

export const ListItem  = ({title, year, place}) => {

  return (
    <div className="">
        {year} | {title}<p className='font-italic'>{place}</p>
    </div>
  )

};