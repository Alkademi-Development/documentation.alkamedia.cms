interface NestedDir {
    dir: string;
    parents: string[];
}

interface FrontMatter {
    fungsional: string;
    gambar: Array<{
      childImageSharp: any
    }> | [];
    super_admin: string;
    admin: string;
    mentor: string;
    teacher: string;
    partner: string;
    lead_program: string;
    lead_region: string;
    content_writer: string;
    industri: string;
    student: string;
    support_mobile: string;
}  

interface Data {
    docs: {
      edges: Array<{
        node: {
          html: string;
          frontmatter: FrontMatter;
          id: string;
        };
      }>;
    };
  }
  
interface DataNode {
  docs: {
    edges: Array<{
      node: {
        html: string;
        frontmatter: {
          fungsional: string;
          menu: string;
        };
        id: string;
        internal: {
          contentDigest: string;
        };
      };
    }>;
  };
}

interface Edge {
  node: {
    id: string;
    frontmatter: FrontMatter;
    html: string;
  };
}

interface Props {
  filtered: Array<Edge>;
  data: Data;
  role: string | keyof FrontMatter;
}
interface BackToTopProps {
  showBackToTop: boolean;
  scrollToTop: () => void;
}

export {Data, FrontMatter, NestedDir, DataNode, Edge, Props, BackToTopProps}