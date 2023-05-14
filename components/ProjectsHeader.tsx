import Link from "next/link";
import { useRouter } from "next/router";

export const ProjectsHeader = () => {
  const router = useRouter();

  return (
    <div className="absolute mx-4 pb-3 z-10 mt-16 top-0 left-0 right-0 menu border-b">

      <div className="flex sm:flex-row flex-col text-right justify-between sm:text-xl text-l uppercase">

          <Link href="/performances"
          >
            <a className={router.pathname == "/performances" ? "active" : ""}>
              performances
            </a>
          </Link>

          <Link href="/films"
          >
            <a className={router.pathname == "/films" ? "active" : ""}>
              films
            </a>
          </Link>
          <Link href="/zip-cortex"
          >
            <a className={router.pathname == "/zip-cortex" ? "active" : ""}>
              zip-cortex
            </a>
          </Link>

          <Link href="/publications"
          >
            <a className={router.pathname == "/publications" ? "active" : ""}>
              publications
            </a>
          </Link>
        </div>
        {/* <p className="onix">ONIX</p> */}
      {/* </div> */}
      
    </div>
  )

};