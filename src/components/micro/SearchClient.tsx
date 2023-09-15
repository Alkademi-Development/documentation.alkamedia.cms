import { originalSearchClient } from '../../../store/api';

export const searchClient = {
    ...originalSearchClient,
    search(requests: any) {
      if (requests.every(({ params }: { params: { query: string }}) => !params.query)) {
        return Promise.resolve({
          results: requests.map(() => ({
            hits: [],
            nbHits: 0,
            nbPages: 0,
            page: 0,
            processingTimeMS: 0
          }))
        });
      }
  
      return originalSearchClient.search(requests);
    }
  };
  