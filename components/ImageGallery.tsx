export const ImageGallery  = ({image}) => {

  return (
    <div className='self-center mx-auto'>
        <img className="max-h-[100vh]" loading='lazy' src={`/images/${image}`} alt=''/>
    </div>
  )

};