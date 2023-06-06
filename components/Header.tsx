import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { ThemeToggle } from "./ThemeToggle"


export const Header = () => {
  const router = useRouter();

  return (
    <div className=" z-20 fixed top-0 left-0 right-0  backdrop-blur-md menu uppercase  text-xs">

      <div className="flex justify-between mx-3 px-1 py-4 border-b">
        <div className="flex flex-col"> 
          <div>
            .
          </div> 
          <br />
          <Link href="/performances"
          >
            <a className={router.pathname == "/performances" ? "active" : "" + router.pathname == "/films" ? "active" : "" + router.pathname == "/zip-cortex" ? "active" : "" + router.pathname == "/publications" ? "active" : ""}>
              projects
            </a>
          </Link>
          
          <Link href="/workshops"
          >
            <a className={router.pathname == "/workshops" ? "active" : ""}>
              workshops
            </a>
          </Link>
        </div>
        <p className="font-display sm:text-5xl text-3xl sm:pt-1 pt-3"><Link href="/"
          >
            <a className={router.pathname == "/" ? "active" : ""}>
              {/* <img className="max-h-[5em]" src="/logo1.png" alt="" /> */}
              onix
            </a>
            </Link>
        </p>
        <div className="flex flex-col text-right">
          <div>
             &nbsp;<ThemeToggle />
          </div>
          <br />
          <Link href="/bio"
          >
            <a className={router.pathname == "/bio" ? "active" : ""}>
              biography
            </a>
          </Link>

          <Link href="mailto:contact@onixperience.io"
          >
            <a >
              contact
            </a>
          </Link>
        </div>
      </div>
      
    </div>
  )

};