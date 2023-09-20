import React, { useRef, useState, useEffect } from "react";
import { Highlight, useHits, UseHitsProps } from 'react-instantsearch';
import { Link } from 'gatsby';
import { KeyboardNavigation } from "./micro/KeyShortcut";

export const SearchItem: React.FC<{ props: UseHitsProps }> = ({ props }) => {
  const category: string[] = [];
  const { hits } = useHits<any>(props);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const scrollIntoView = (index: number) => {
    const selectedElement = itemRefs.current?.[index];
    if (selectedElement) {
      selectedElement.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    if (selectedIndex !== null) {
      scrollIntoView(selectedIndex);
    }
  }, [selectedIndex]);

  return (
    <ul>
    {hits.map((hit, index) => {
      category.push(hit.menu as string)
      const isSelected = selectedIndex === index;
      return (
        <li key={hit.objectID}>
          <div className="flex flex-col w-full group search-item" >
            {category.filter(v => v == hit.menu).length == 1 ? (
             <h1 className="my-3 text-indigo-800 dark:text-indigo-400 text-lg" >{hit.menu}</h1>
              ) : (<></>)}
            <Link to={`/${hit.menu.replace(/(\w+)\((\w+)\)/g, "$1/$2")}#${hit.fungsional}`} >
              <div className={`px-4 py-3.5 w-full bg-fff shadow-md dark:bg-gray-800 ${isSelected ? 'text-white bg-indigo-900 dark:bg-indigo-900' : ''} rounded-[0.250rem] my-[0.15rem]`} onMouseEnter={() => setSelectedIndex(index)} onMouseLeave={() => setSelectedIndex(null)} tabIndex={0} ref={(el) => (itemRefs.current[index] = el)} onClick={() => setSelectedIndex(index)}  >
                <div className="dark:text-gray-50 flex justify-between">
                  <div className="text-start flex">
                    <span className="mr-[0.9rem] text-2xl text-indigo-500 dark:text-indigo-400">
                      <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > <path d="M17 6v12c0 .52-.20 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinejoin="round"></path>
                      </svg>
                    </span>
                    <Highlight className="font-semibold" attribute="fungsional" hit={hit} />
                  </div>
                  <div className={`text-end opacity-0 ${isSelected ? 'opacity-100' : ''}`}>
                  <svg className="" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > <g stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round" > <path d="M18 3v4c0 2-2 4-4 4H2"></path> <path d="M8 17l-6-6 6-6"></path> </g>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </li>
      );
    })}
    <KeyboardNavigation
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      itemRefs={itemRefs as React.MutableRefObject<(HTMLDivElement | null)[]>} />
  </ul>
  );
};
