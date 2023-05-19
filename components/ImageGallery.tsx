export const ImageGallery  = ({image}) => {

  return (
    <div className='image-gallery'>
        <img loading='lazy' src={`/images/film/${image}`} alt=''/>
    </div>
  )

};