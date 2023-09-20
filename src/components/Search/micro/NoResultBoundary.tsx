import React from 'react';
import {useInstantSearch } from 'react-instantsearch';
import { NoResultBoundaryProps } from '../../../types';

export const NoResultsBoundary : React.FC<NoResultBoundaryProps> = ({children, fallback}) => {
    const {results} = useInstantSearch()
    if (!results.__isArtificial && results.nbHits === 0 ){
      return(
        <>
        {fallback}
        <div hidden>{children}</div>
        </>
      )
    }
    return children
  }
  
  
  
  
  