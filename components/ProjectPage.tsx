import { ProjectsHeader } from "./ProjectsHeader";

export const ProjectPage  = ({title, subtitle, year, opening, category, imageCover, description, credits, videoYoutube, }) => {

  return (
    <div className="">
      <ProjectsHeader />
      <div className="project">
        <div className="capitalize">
          <p className="font-display text-4xl mb-[0.15em] text-left">
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
        <div className='mb-[2em] flex justify-center'>
          <img loading='lazy' className="max-h-[100vh]" src={`/images/${category}/${imageCover}`} alt=''/>
        </div>
        <div className="">
          {description}
          {opening ?
            <div className="mt-[2em] text-sm font-italic ">
              {opening}
            </div> 

            : null
          }
          {credits ?
            <div className="mt-[3.5em] text-sm ">
              <p className="underline mb-[0.5em]">CREDITS</p>
              {credits}
            </div>
            : null
          }
          
        </div>
      </div>
      {videoYoutube ? 
        <div className='relative sm:h-[80vh] h-[50vh] w-[100%] mb-20'>
          <iframe width="100%" height="100%" src={videoYoutube} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div> 
        : ''}
      
      {/* {videoVimeo ?
        <div className="relative">
         <iframe src={videoVimeo} className="absolute t-0 l-0 w-[100%] h-[100%]" allow="autoplay; fullscreen; picture-in-picture"></iframe>
        </div> 
        : '' 
      } */}
    </div>
  )

};