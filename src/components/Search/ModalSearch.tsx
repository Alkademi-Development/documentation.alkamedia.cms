import React from 'react';
import { Search } from './Search';
import { SearchFooter } from './micro/SearchFooter';
import { ModalSearchProps } from '../../types';

const ModalSearch: React.FC<ModalSearchProps> = ({ modal, setModal }) => {
  return (
    <div className={`container sm:-ml-32 flex justify-center  ${modal ? 'fixed sm:inset-x-40    sm:inset-y-0' : ''}`}>
      <div className="max-h-[100vh] animate__animated animate__fadeIn animate__fast w-full _sm:left-0 sm:max-w-[45%] absolute z-[60] top-[3rem] h-auto bg-modalSearch dark:bg-darkModalSearch rounded ">
        <div className="flex w-full justify-end mb-2">
          <button
            type="button"
            className="text-gray-600 dark:text-gray-300 hover:bg-gray-200 hover:text-gray-700 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-900 dark:hover:text-white"
            onClick={() => setModal(false)}>
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="py-1 px-2 ">
          <Search />
        </div>
          <SearchFooter />
      </div>
    </div>
  );
};

export default ModalSearch;
