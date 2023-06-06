import Image from 'next/image'

export const ListItem  = ({title, category, opening, date}) => {

  return (
    <div className="cv-grid text-xs pb-4">
        <p>{title}</p>
        <p className='font-italic'>{category}</p>
        <p>{opening}</p>
        <p className='md:text-right'>{date}</p>
    </div>
  )

};