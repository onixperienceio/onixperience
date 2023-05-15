import Image from 'next/image'

export const SimpleListItem  = ({title, year, place}) => {

  return (
    <div className="text-sm pb-3">
        {title}<span className='font-italic'> {place}</span> {year}
    </div>
  )

};