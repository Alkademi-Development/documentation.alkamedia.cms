import React from 'react';
import { useInstantSearch } from 'react-instantsearch';

export const NoResults = () => {
    const { indexUiState } = useInstantSearch();
  
    return (
      <div className="flex gap-5 mx-5 my-5 dark:text-gray-100">
          {indexUiState.query ? (
          <div className='flex gap-5 my-3'>
            <svg width="40" height="40" viewBox="0 0 20 20" fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path>
            </svg>
            <p className='text-gray-700 dark:text-gray-100 mt-2'>
              No result for <b className='bold'>{indexUiState.query}</b>
            </p>        
          </div>
          ) : (
            <b className='mx-auto text-gray-500 my-3 '>No recent searches</b>
          )}
        </div>
    );
  };