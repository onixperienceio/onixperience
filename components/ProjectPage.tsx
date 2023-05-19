import { ProjectsHeader } from "./ProjectsHeader";

export const ProjectPage  = ({title, subtitle, year, opening, category, imageCover, description, videoYoutube}) => {

  return (
    <div className="">
      <ProjectsHeader />
      <div className="project">
        <div className="capitalize">
          <p className="font-display text-xl mb-[0.25em]">
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
        <div className='mb-[2em]'>
          <img src={`/images/${category}/${imageCover}`} alt=''/>
        </div>
        <div className="">
          {description}
        </div>
      </div>
      {/* {videoYoutube ? 
        <div className='relative sm:h-[80vh] h-[50vh] w-[100%] mb-20'>
          <iframe width="100%" height="100%" src={videoYoutube} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div> 
        : ''} */}
    </div>
  )

};