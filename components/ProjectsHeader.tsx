import Link from "next/link";


export const ProjectsHeader = () => {

  return (
    <div className="absolute mx-4 pb-3 z-10 mt-16 top-0 left-0 right-0 backdrop-blur-md bg-[color:var(--bg-color)] menu border-b">

      <div className="flex justify-between text-xl uppercase">
        {/* <div className="flex flex-row w-fit space-x-4">   */}

          <Link href="/films"
          >
            <a className="filter-none not-italic">
              films
            </a>
          </Link>
          
          <Link href="/performances"
          >
            <a className="filter-none not-italic">
              performances
            </a>
          </Link>

          <Link href="/zip-cortex"
          >
            <a className="filter-none not-italic">
              zip-cortex
            </a>
          </Link>

          <Link href="/publications"
          >
            <a className="filter-none not-italic">
              publications
            </a>
          </Link>
        </div>
        {/* <p className="onix">ONIX</p> */}
      {/* </div> */}
      
    </div>
  )

};