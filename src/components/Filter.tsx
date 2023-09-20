import * as React from "react"
import { roleColor, roleColorClass } from "./micro/RoleColor"
import { FilterProps } from "../types"

export const Filter: React.FC<FilterProps> = ({ role, setRole, showDropdown, setShowDropdown }) => {    
    return (
      <>      
        <div className="ml-auto my-auto flex relative space-x-2 items-center ">
        <button
          type="button"
          className={`flex items-center p-2 text-white transition duration-300 rounded-lg group dark:hover:bg-gray-700 ${roleColorClass(role)}`}
          onClick={() => setShowDropdown(showDropdown === "role_filter" ? null : "role_filter")}
        >
          <svg className={`${roleColor(role)} w-[20px] h-[20px`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
          <path d="M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.99 1.99 0 0 0 .18-2.09Z"/>
        </svg>
          <span className="ml-2 text-start pl-2 capitalize max-w-[7rem] w-[7rem] ">{role === "all" ? "Filter" : role.split("_").join(" ")}</span>
        </button>
        <ul
          id="filter_role"
          className={`${
            showDropdown === "role_filter" ? "visible opacity-100" : "invisible opacity-0"
          }
          py-0 sm:py-3 sm:my-5 my-2 flex flex-col px-4 text-gray-700 dark:text-gray-300 transition-all duration-300 absolute left-0 top-full transform sm:bg-gray-300 bg-gray-100 dark:bg-gray-800 rounded-xl z-10 `}
        >

          <li className="relative flex">
            <button
              type="button"
              className="text-white/75 dark:text-white bg-gray-500 w-full flex gap-3 capitalize focus:outline-none font-medium rounded-full text-sm px-3 py-2 text-center m-1 focus:ring-4 dark:bg-gray-500 dark:hover:bg-gray-500 dark:focus:ring-gray-500 "
              onClick={() => {
                setRole("all");
                setShowDropdown(null);
              }}
            >
             <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M212.333 224.333H12c-6.627 0-12-5.373-12-12V12C0 5.373 5.373 0 12 0h48c6.627 0 12 5.373 12 12v78.112C117.773 39.279 184.26 7.47 258.175 8.007c136.906.994 246.448 111.623 246.157 248.532C504.041 393.258 393.12 504 256.333 504c-64.089 0-122.496-24.313-166.51-64.215-5.099-4.622-5.334-12.554-.467-17.42l33.967-33.967c4.474-4.474 11.662-4.717 16.401-.525C170.76 415.336 211.58 432 256.333 432c97.268 0 176-78.716 176-176 0-97.267-78.716-176-176-176-58.496 0-110.28 28.476-142.274 72.333h98.274c6.627 0 12 5.373 12 12v48c0 6.627-5.373 12-12 12z"/>
             </svg>
              <span>Reset</span>
            </button>
          </li>
          {["super_admin", "admin", "mentor", "teacher", "partner", "lead_program", "lead_region", "content_writer", "industri", "student"].map(r => (
            <li key={r}>
              <button
                type="button"
                onClick={() => {
                  setRole(r);
                  setShowDropdown(null);
                }}
                className={`text-white/90 dark:text-white w-full flex gap-3 capitalize focus:outline-none font-medium rounded-full text-sm px-3 py-2 text-center m-1 focus:ring-4 ${roleColorClass(r)}`}
              >
               <svg className={` w-[15px] h-[15px] ${roleColor(r)}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
              </svg>
                {r.split("_").join(" ")}
              </button>
            </li>
          ))}
        </ul>
        <div>
      </div>
    </div>
    </>
)}
