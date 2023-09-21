import * as React from "react"
import { Link,} from "gatsby"
import { NestedDir, SidebarProps } from "../types"
import { Filter } from "./Filter"
import "animate.css"

const Sidebar: React.FC<SidebarProps> = ({ data, pageName, state, showSidebar, setShowSidebar }) => {
  const [role, setRole] = state;
  const [showDropdown, setShowDropdown] = React.useState<string | null>(null);
  let dirs: (NestedDir|string)[] = data.filter(menu => !menu.includes("("))
  
  
  for(let menu of data.filter(menu => menu.includes("("))){
    const i = dirs.findIndex(dir => typeof(dir) == 'string' ? menu.includes(dir) : menu.includes(dir.dir))
    
    if (i >= 0){
      dirs[i] = {
        dir: menu.split("(")[0],
        parents: [...(typeof(dirs[i]) == 'string' ? [menu.split("(")[0]] : (dirs[i] as NestedDir).parents), menu]
      }
    } else{
      dirs.push({
        dir: menu.split("(")[0],
        parents: [menu]
      })
    }
  }

  return (
    <>
    <aside className={(showSidebar ? "" : "-translate-x-60") + " overflow-y-auto fixed top-20 left-0 w-[14.2rem] z-20 sm:w-72 h-screen transition-transform sm:translate-x-0"} aria-label="Sidebar">
      <div className="h-full px-3 pb-4 overflow-y-auto bg-sidebar dark:bg-gray-950">
        <div className="pt-3 sm:hidden" >
          <Filter role={role} setRole={setRole} showDropdown={showDropdown} setShowDropdown={setShowDropdown} showSidebar={showSidebar} setShowSidebar={setShowSidebar}  data={[]} pageName={"Filter"} />
        </div>
        <ul className="space-y-1.5 font-ubuntu text-base pt-3 pl-1.5">
          {dirs.map((dir, index) => {
            return (
              <li key={index} className="capitalize font-normal text-gray-700 dark:text-gray-300">
                {typeof dir == 'string' || dir.parents[0] == dir.dir ? (
                  <Link to={"/" + (typeof dir == 'string' ? dir : dir.dir).replace(/(\w+)\((\w+)\)/g, "$1/$2")} className="flex items-center pl-4 text-[1rem] transition-transform duration-200 ease-in-out transform hover:translate-x-[5px]">
                    {pageName === (typeof dir == 'string' ? dir : dir.dir) ?  (
                      <i className="w-[0.435rem] h-[0.435rem] mr-2 rounded-full inline-block bg-indigo-500 -ml-4"></i>
                    ) : null}
                    <div className="flex w-full justify-between">
                      <span>{(typeof dir == 'string' ? dir : dir.dir).replace(/\w+\((.*?)\)/g, "$1")}</span>
                      {typeof dir != 'string' ? (
                        <svg className={(((showDropdown == 'dropdown-' + index) || dir.parents.includes(pageName)) ? '' : '-rotate-90') + ' w-2.5 h-2.5 ml-2.5'} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                      ): null}
                    </div>
                  </Link>
                ) : (
                  <button className="flex w-full items-center justify-between pl-4 text-[1rem]" onClick={() => setShowDropdown(showDropdown == ('dropdown-' + index) ? null : ('dropdown-' + index))}>
                    <span>{dir.dir.replace(/\w+\((.*?)\)/g, "$1")}</span>
                    <svg className={(((showDropdown == 'dropdown-' + index) || dir.parents.includes(pageName)) ? '' : '-rotate-90') + ' w-2.5 h-2.5 ml-2.5'} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                )}
                {typeof dir != 'string' ? (
                  <ul className={`space-y-1 ml-2 mt-2 animate__animated animate_faster ${((showDropdown == 'dropdown-' + index) || dir.parents.includes(pageName)) ? 'animate__fadeIn' : 'hidden'}`} >
                    {dir.parents.map((parent, index) => {
                      if(parent == dir.dir) return null;
                      return (
                        <li key={index} className="capitalize font-normal text-gray-700 dark:text-slate-300 transition-transform duration-200 ease-in-out transform hover:translate-x-[5px]">
                          <Link to={"/" + parent.replace(/(\w+)\((\w+)\)/g, "$1/$2")} className="flex items-center pl-4 text-[1rem]">
                            {pageName === parent?  (
                              <i className="w-[0.435rem] h-[0.435rem] mr-4 rounded-full inline-block bg-indigo-500 -ml-6"></i>
                            ) : null}
                            <span>{parent.replace(/\w+\((.*?)\)/g, "$1")}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                ): null}
              </li>
              )
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
