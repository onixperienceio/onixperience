import Image from 'next/image'

export const SimpleListItem  = ({title, year, place}) => {

  return (
    <div className="">
        {year} | {title}<p className='font-italic'>{place}</p>
    </div>
  )

};