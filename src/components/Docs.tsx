import React from 'react';
import Gallery from '@browniebroke/gatsby-image-gallery';
import { FrontMatter, Props } from '../types';

const Docs: React.FC<Props> = ({ data, role }) => {
  const filtered = data.docs.edges.filter((edge) =>
    role === 'all'
      ? true
      : edge.node.frontmatter[role as keyof FrontMatter] === 'Allow'
  );

  return (
    <ul className='ml-[5vh]' >
      {filtered.length > 0 ? (
        filtered.map((edge) => {
          const frontmatter: FrontMatter = edge.node.frontmatter;
          const images =
            frontmatter.gambar?.map((v) => v.childImageSharp) || [];

          return (
            <li
              id={frontmatter.fungsional.trim()}
              key={edge.node.id}
              className="mb-4 pt-16"
            >
              <div>
                <h1 className="dark:text-slate-200 font-semibold mb-1 text-2xl sm:text-3xl">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-[0.05rem]">
                    #
                  </span>
                  {frontmatter.fungsional.trim()}
                </h1>
                <span
                  className={`text-slate-200 text-sm rounded-lg px-1.5 py-[0.075] ${
                    frontmatter.support_mobile === 'Yes'
                      ? 'bg-blue-500'
                      : frontmatter.support_mobile === 'No'
                      ? 'bg-red-500'
                      : 'bg-orange-500'
                  }`}
                >
                  {frontmatter.support_mobile === 'Yes'
                    ? 'Support Mobile'
                    : frontmatter.support_mobile === 'No'
                    ? 'Not Support Mobile'
                    : 'Pending'}
                </span>
                <article
                  className="w-full dark:text-slate-300 font-light prose lg:prose-xl dark:prose-invert mt-3 mb-1"
                  dangerouslySetInnerHTML={{ __html: edge.node.html }}
                ></article>
                {images.length > 0 ? (
                  <>
                    <span className="dark:text-slate-200 font-semibold">
                      Screenshot
                    </span>
                    <div className="mx-3">
                      <Gallery images={images} colWidth={90} />
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            </li>
          );
        })
      ) : (
        <p className="text-center text-gray-600 dark:text-gray-300 font-light italic text-lg">
          No Available
        </p>
      )}
    </ul>
  );
};

export default Docs;
