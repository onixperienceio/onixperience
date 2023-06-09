import Link from "next/link";
import { useRouter } from "next/router";

export const ProjectsHeader = () => {
  const router = useRouter();

  return (
    <div className="projects-header menu">

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

          {/* para agregar un item al menu de projects */}
          {/* <Link href="/music"
          >
            <a className={router.pathname == "/music" ? "active" : ""}>
              music
            </a>
          </Link> */}

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