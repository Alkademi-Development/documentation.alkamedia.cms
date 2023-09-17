import * as React from "react"
import { Link } from "gatsby"
import { NestedDir } from "../types"
import { Filter } from "./Filter"

const Sidebar: React.FC<{ showSidebar: boolean; setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>, data: Array<string>, pageName: string, state: [string, React.Dispatch<React.SetStateAction<string>>] }> = ({data, pageName, state, showSidebar, setShowSidebar }) => {
  const [role, setRole] = state;
  const [showDropdown, setShowDropdown] = React.useState<string | null>(null);
  let dirs: (NestedDir|string)[] = data.filter(menu => !menu.includes("("))

  
  for(let menu of data.filter(menu => menu.includes("("))){
    const i = dirs.findIndex(dir => typeof(dir) == 'string' ? menu.includes(dir) : menu.includes(dir.dir))
    if(i >= 0){
      dirs[i] = {
        dir: menu.split("(")[0],
        parents: [...(typeof(dirs[i]) == 'string' ? [menu.split("(")[0]] : (dirs[i] as NestedDir).parents), menu]
      }
    }else{
      dirs.push({
        dir: menu.split("(")[0],
        parents: [menu]
      })
    }
  }
  return (
    <>
    <aside className={(showSidebar ? "" : "-translate-x-full") + " fixed top-0 mt-10 left-0 w-[14.2rem] z-20 sm:w-64 h-screen transition-transform sm:translate-x-0"} aria-label="Sidebar">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
      <div className="pt-14 block sm:hidden" >
      <Filter role={role} setRole={setRole} showDropdown={showDropdown} setShowDropdown={setShowDropdown} showSidebar={showSidebar} setShowSidebar={setShowSidebar}  data={[]} pageName={"Filter"} />
      </div>
        <ul className="space-y-2 font-medium pt-5 sm:pt-14 ">
          <li className="mb-4">
              </li>
              {dirs.map((dir, index) => {
              const dropdownId = `dropdown-${index}`;
                return (
                  <li key={index} className="capitalize font-normal text-gray-700 dark:text-slate-300 transition-transform duration-200 ease-in-out transform hover:translate-x-[5px] ">
                    { typeof dir == 'string' ? (
                      <Link to={"/" + dir.replace(/(\w+)\((\w+)\)/g, "$1/$2")} className="flex items-center pl-4">{pageName == dir ? (
                        <i className="w-2 h-2 mr-2 rounded-full inline-block bg-indigo-500 -ml-4"></i>
                      ) : (
                        <></>
                      )}<span>{dir.replace(/\w+\((.*?)\)/g, "$1")}</span></Link>
                    ) : (
                      <>
                        <button
                          type="button"
                          className={`ml-0.5 flex items-center w-full py-1.5 px-3 text-base transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${showDropdown === dropdownId ? "bg-gray-200 dark:bg-gray-600" : ""}`}
                          onClick={() => setShowDropdown(dropdownId == showDropdown ? '' : dropdownId)}
                          >
                          <span className="flex-1 text-left whitespace-nowrap capitalize">{dir.dir}</span>
                          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                          </svg>
                        </button>
                        <ul id={dropdownId} className={((showDropdown === dropdownId || pageName.startsWith(dir.dir)) ? "" : "hidden") + " py-2 space-y-2 ml-4"}>
                          {dir.parents.map((_dir, index) => (
                            <li key={dir.dir + index}>
                              <Link to={"/" + _dir.replace(/(\w+)\((\w+)\)/g, "$1/$2")} className="flex items-center pl-4">
                                {pageName == _dir ? (
                                  <i className="w-2 h-2 mr-2 rounded-full inline-block bg-indigo-500 -ml-4"></i>
                                ) : (
                                  <></>
                                )}<span>{_dir.replace(/\w+\((.*?)\)/g, "$1")}</span></Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
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
