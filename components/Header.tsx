import Link from "next/link";
import { useRouter } from "next/router";
import { ThemeToggle } from "./ThemeToggle"


export const Header = () => {
  const router = useRouter();

  return (
    <div className=" z-20 fixed top-0 left-0 right-0  backdrop-blur-md menu uppercase  text-xs">

      <div className="flex justify-between mx-3 px-1 py-4 border-b">
        <div className="flex flex-row w-fit space-x-4">  
          <Link href="/performances"
          >
            <a className={router.pathname == "/performances" ? "active" : "" + router.pathname == "/films" ? "active" : "" + router.pathname == "/zip-cortex" ? "active" : "" + router.pathname == "/publications" ? "active" : ""}>
              projects
            </a>
          </Link>
          
          <Link href="/teaching"
          >
            <a className={router.pathname == "/teaching" ? "active" : ""}>
              teaching
            </a>
          </Link>

          <Link href="/bio"
          >
            <a className={router.pathname == "/bio" ? "active" : ""}>
              bio
            </a>
          </Link>

          <Link href="mailto:name@email.com"
          >
            <a >
              contact
            </a>
          </Link>
        </div>
        <p className="font-display"><Link href="/"
          >
            <a className={router.pathname == "/" ? "active" : ""}>
              ONIX
            </a>
          </Link> <ThemeToggle /></p>
      </div>
      
    </div>
  )

};