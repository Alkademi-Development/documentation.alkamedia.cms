import type { GatsbyConfig } from "gatsby";
import * as dotenv from 'dotenv'
import { DataNode} from "./src/types";
dotenv.config();

const query = `
  query {
    docs: allMarkdownRemark {
      edges {
        node {
          html
          frontmatter {
            fungsional
            menu
          }
          id
          internal {
            contentDigest
          }
        }
      }
    }
  }
`

const queries = [
  {
    query,
    queryVariables: {},
    transformer: ({ data }: { data: DataNode}) => data.docs.edges.map(v => {
      return {
        html: v.node.html,
        menu: v.node.frontmatter.menu,
        fungsional: v.node.frontmatter.fungsional,
        id: v.node.id,
        internal: v.node.internal,
      } 
    }),
    indexName: process.env.ALGOLIA_INDEXNAME!,
    settings: {
    },
    mergeSettings: false,
  },
]

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Documentation Alkamedia CMS`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-netlify",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `png`, `jpg`],
          placeholder: `none`,
          breakpoints: [750, 1080, 1366, 1920],
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'md',
        path: `${__dirname}/fungsional`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `static/icons/alkamedia.png`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {
                ts: "typescript",
                js: "javascript",
                sh: "bash"
              },
              showLineNumbers: true,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APPID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.ALGOLIA_APIKEY,
        indexName: process.env.ALGOLIA_INDEXNAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000
        settings: {
          // optional, any index settings
          // Note: by supplying settings, you will overwrite all existing settings on the index
        },
        mergeSettings: false, // optional, defaults to false. See notes on mergeSettings below
        concurrentQueries: false, // default: true
        dryRun: false, // default: false, only calculate which objects would be indexed, but do not push to Algolia
        continueOnFailure: false, // default: false, don't fail the build if Algolia indexing fails
        algoliasearchOptions: undefined, // default: { timeouts: { connect: 1, read: 30, write: 30 } }, pass any different options to the algoliasearch constructor
      },
    },
  ]
};

export default config;
