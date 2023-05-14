import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle"


export const Header = () => {

  return (
    <div className="py-4 mx-3 px-1 z-20 fixed top-0 left-0 right-0  backdrop-blur-md bg-[color:var(--bg-color)] menu uppercase border-b text-xs">

      <div className="flex justify-between">
        <div className="flex flex-row w-fit space-x-4">  
          <Link href="/projects"
          >
            <a className="filter-none not-italic">
              projects
            </a>
          </Link>
          
          <Link href="/teaching"
          >
            <a className="filter-none not-italic">
              teaching
            </a>
          </Link>

          <Link href="/bio"
          >
            <a className="filter-none not-italic">
              bio
            </a>
          </Link>

          <Link href="/contact"
          >
            <a className="filter-none not-italic">
              contact
            </a>
          </Link>
        </div>
        <p className="onix"><Link href="/"
          >
            <a className="filter-none not-italic">
              ONIX
            </a>
          </Link> <ThemeToggle /></p>
      </div>
      
    </div>
  )

};