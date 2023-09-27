import React from 'react';
import { Search } from './Search';
import { SearchFooter } from './micro/SearchFooter';

const ModalSearch = () => {
  return (
      <div className="max-h-[100vh] w-full fixed sm:ml-20 md:ml-[6rem] lg:ml-[15rem] sm:inset-x-40 sm:w-auto _sm:left-0 sm:max-w-[45%] z-[60] top-[3rem] h-auto bg-modalSearch dark:bg-darkModalSearch rounded-md">
        <div className="py-4 px-4 ">
          <Search />
        </div>
          <SearchFooter />
      </div>
  );
};

export default ModalSearch;
