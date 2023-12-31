import * as React from "react";
import { Link, graphql } from "gatsby"
import Sidebar from "../components/Sidebar"
import { FrontMatter, IndexPageProps } from "../types";
import Navbar from "../components/Navbar"
import ModalSearch from "../components/Search/ModalSearch";
import { fontStyles } from "../components/micro/Font";
import Docs from "../components/Docs";
import BackToTop from "../components/BackToTop";
import { Helmet } from "react-helmet";
import useKeyboardShortcuts from "../components/Search/micro/KeyShortcut";


const IndexPage: React.FC<IndexPageProps> = ({ data, pageContext }) => {
  const [role, setRole] = React.useState<string | keyof FrontMatter>("all");
  const [showSidebar, setShowSidebar] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  
  const openModal = () => {
    setModal(true);
  };
  
  const closeModal = () => {
    setModal(false);
  };
  useKeyboardShortcuts(openModal, closeModal);

 
  const filtered = data.docs.edges.filter(edge => role == "all" ? true : edge.node.frontmatter[role as keyof FrontMatter] == "Allow")
  return (
    <main style={fontStyles} className="bg-fff dark:bg-gray-900 min-h-screen w-full">
        <Helmet>
        <title>{pageContext.pageName}</title>
       </Helmet>
       <BackToTop />
      <Navbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} data={[]} pageName={"Navbar"} state={[role, setRole]} />
      <Sidebar data={pageContext.all} pageName={pageContext.pageName} state={[role, setRole]} showSidebar={showSidebar} setShowSidebar={setShowSidebar} dir={{
        parents: [],
        dir: ""
      }} />
      <div className="container sm:ml-64 mr-auto w-auto px-11 pt-20 pb-2">
        <div className="w-[90%] sm:max-w-[94%] mt-8 mx-auto dark:text-gray-100">
          <button type="submit" onClick={() => setModal(!modal)} className="w-full font-thin text-xl text-gray-700 dark:text-gray-300 text-left border-b-[1px] border-gray-500 dark:border-gray-400 flex items-center px-1">
          <svg width="20" height="20" className="inline-block mb-2" viewBox="0 0 20 20"><path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" stroke="currentColor" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
            <span className="text-[1rem] mb-2 ml-4 ">Search</span>
          </button>
        </div>
        {modal ? (
      <>
        <div className="fixed w-screen h-screen inset-0 bg-black bg-opacity-10 z-50 backdrop-blur-md " onClick={() => setModal(!modal)}></div>
        <ModalSearch />
      </>
    ) : (
      <></>
    )}
          <div className="max-h-auto mx-auto mt-8 sm:ml-16 md:ml-10 ml-1 mb-3 text-gray-700 dark:text-gray-300">
          <h1 className="font-semibold sm:text-4xl text-3xl  capitalize mb-1 my-10 ">{pageContext.pageName}</h1>
            <ul className="max-w-md gap-1 text-gray-500 list-none dark:text-gray-400">
              {data.docs.edges.filter(edge => role == "all" ? true : edge.node.frontmatter[role as keyof FrontMatter] == "Allow").map(edge => {
                return (
                  <li key={edge.node.id} className="my-[0.2rem]" >
                <Link to={"#" + edge.node.frontmatter.fungsional.trim()} className="hover:text-gray-700 text-xl hover:dark:text-gray-300">
                  <span className="text-indigo-500 dark:text-indigo-400 mr-[0.05rem]" >#</span>{edge.node.frontmatter.fungsional.trim()} </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <Docs filtered={filtered} data={data} role={role}/>
      </div>
    </main>
  )
}


export default IndexPage

export const query = graphql`query($category: String) {
  docs: allMarkdownRemark (filter: {frontmatter: {menu: {eq: $category}}}) {
    edges {
      node {
        html
        frontmatter {
          fungsional
          gambar {
            childImageSharp {
            thumb: gatsbyImageData(
              height: 386
              width: 717
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
           }
          }
          super_admin
          admin
          mentor
          teacher
          partner
          lead_program
          lead_region
          content_writer
          industri
          student
          support_mobile
        }
        id
      }
    }
  }
}`

