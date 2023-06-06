import Image from 'next/image'

export const SimpleListItem  = ({title, year, place}) => {

  return (
    <div className="text-sm pb-1">
        {year} {title}<span className='font-italic'> {place}</span>
    </div>
  )

};