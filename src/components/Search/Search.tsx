import React from 'react';
import { InstantSearch, SearchBox} from 'react-instantsearch';
import { SearchItem } from './SearchItem';
import { SearchClient } from '@algolia/client-search';
import { searchClient } from './micro/SearchClient';
import { NoResults } from './micro/NoResult';
import { NoResultsBoundary } from './micro/NoResultBoundary';

export const Search = () => {
  return (
    <>
      <InstantSearch
        searchClient={searchClient as SearchClient}
        indexName={process.env.GATSBY_ALGOLIA_INDEXNAME!}
      >
        <div className="container bg-gray-100 dark:bg-gray-900 w-full mb-4 border-solid border-2 border-sky-500 flex justify-between">
          <svg width="25" height="25" className="text-indigo-700 mx-5 my-auto" viewBox="0 0 20 20">
            <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <SearchBox className="flex-grow" placeholder='Search docs' autoFocus />
        </div>
        <div className='max-h-[70vh] h-auto overflow-y-auto '>
          <NoResultsBoundary fallback={<NoResults />} children={undefined} />
          <SearchItem props={{
            escapeHTML: undefined,
            transformItems: undefined
          }}/>
        </div>
      </InstantSearch>
    </>
  );
};