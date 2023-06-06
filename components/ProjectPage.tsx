import { ProjectsHeader } from "./ProjectsHeader";

export const ProjectPage  = ({title, subtitle, year, opening, category, imageCover, description, credits, videoYoutube, imagenes}) => {

  return (
    <div className="pb-20">
      
      <ProjectsHeader />
      
      <div className="capitalize">
        <p className="font-display sm:text-4xl text-l mb-[0.15em] text-left">
            {title}
        </p>
        <p className='text-sm font-italic'>
            {subtitle}
        </p>
        <p className="text-sm">
          {year}
        </p>
      </div>

      <br />
      
      <div className="pb-20 grid grid-cols-1 md:gap-12 gap-2 md:grid-cols-2">

        <div className='mb-[2em] m-auto'>
          <img loading='lazy' className="max-h-[100vh]" src={`/images/${category}/${imageCover}`} alt=''/>
        </div>

        <div className="xl:mt-12">
          {description}
          {opening ?
            <div className="mt-[2em] text-sm font-italic ">
              {opening}
            </div> 

            : null
          }
        </div>

      </div>
      
      <div className="grid md:grid-cols-2 gap-12">
        {imagenes}

      </div>

      {videoYoutube ? 
        <div className='relative sm:h-[80vh] h-[30vh] w-[100%] my-20'>
          <iframe width="100%" height="100%" src={videoYoutube} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div> 
      : ''}
    
      {/* {videoVimeo ?
      <div className="relative">
        <iframe src={videoVimeo} className="absolute t-0 l-0 w-[100%] h-[100%]" allow="autoplay; fullscreen; picture-in-picture"></iframe>
      </div> 
      : '' 
      } */}

      {credits ?
        <div className="mt-[3.5em] text-sm ">
          <hr />
          <br />
          <p className="underline mb-[0.5em]">CREDITS</p>
          {credits}
        </div>
        : null
      }

    </div>
  )

};