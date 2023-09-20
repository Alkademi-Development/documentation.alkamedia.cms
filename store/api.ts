import algoliasearch from 'algoliasearch/lite';

export const originalSearchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APPID!,
    process.env.GATSBY_ALGOLIA_APIKEY!,
);




  