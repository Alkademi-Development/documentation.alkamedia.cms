import React from "react"
import { Highlight,} from 'react-instantsearch';
import { Link } from 'gatsby';

export const SearchItem: React.FC<{ hit: any }> = ({ hit }) => (
    <>
    <div className='flex flex-col w-full group '>
      <Link to={`/${hit.menu.replace(/(\w+)\((\w+)\)/g, "$1/$2")}#${hit.fungsional}`}>
        <div className='px-4 py-3.5 w-full bg-gray-200 dark:bg-gray-700 hover:text-white hover:bg-indigo-900 hover:dark:bg-indigo-900 rounded-[0.250rem] my-[0.15rem]'>
          <div className='dark:text-gray-50 flex justify-between'>
            <div className='text-start flex '>
              <span className='mr-[0.9rem] text-2xl text-indigo-500 dark:text-indigo-400'>
                <svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.20 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path>
                </svg>
              </span>
              <Highlight className='font-semibold' attribute="fungsional" hit={hit} />
            </div>
            <div className={`text-end opacity-0 group-hover:opacity-100 `}>
              <svg className="" width="20" height="20" viewBox="0 0 20 20">
                <g stroke="currentColor" fill="none" fill-rule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 3v4c0 2-2 4-4 4H2"></path>
                  <path d="M8 17l-6-6 6-6"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </>
  );
  
  