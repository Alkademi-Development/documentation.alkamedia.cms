import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Filter } from "./Filter"
import ThemeToggle from "./ThemeToggle"


const Navbar : React.FC<{showSidebar: boolean; setShowSidebar: React.Dispatch<React.SetStateAction<boolean>> ,data: Array<string>, pageName: string, state: [string, React.Dispatch<React.SetStateAction<string>>] }> = ({state, showSidebar, setShowSidebar }) => {
    const [role, setRole] = state;
    const [showDropdown, setShowDropdown] = React.useState<string | null>(null);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
      };
     return (
<nav className="fixed backdrop-blur transition-colors dark:border-slate-50/[0.06] bg-white/10 supports-backdrop-blur:bg-white/60 dark:bg-gray-700/[0.8] top-0 z-30 w-full p-4 h-20 flex">  
  <div className="flex items-center">
    <Link to="/" className="flex items-center">
      <div className="hidden sm:block">
        <StaticImage src="../images/alkamedia-logo-light.png" alt="Logo" layout="fixed" height={36} className="dark:hidden"/>
        <StaticImage src="../images/alkamedia-logo-dark.png" alt="Logo" layout="fixed" height={36} className="hidden dark:block"/>
      </div>
      <StaticImage src="../../static/icons/alkamedia.png" alt="Logo" layout="fixed" height={36} className="block sm:hidden"/>
    </Link>
  </div>
  <div className="flex ml-auto">
    <i className="hidden sm:block my-auto w-[30vh]">
      <Filter role={role} setRole={setRole} showDropdown={showDropdown} setShowDropdown={setShowDropdown} showSidebar={showSidebar} setShowSidebar={setShowSidebar} data={[]} pageName={""} />
    </i>
    <ThemeToggle/>
    <button type="button" onClick={toggleSidebar} className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
      <span className="sr-only">Open sidebar</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
      </svg>
    </button>
  </div>
</nav>


    );
  }

export default Navbar