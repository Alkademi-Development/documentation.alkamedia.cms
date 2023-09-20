import { PageProps } from "gatsby"

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

interface NoResultBoundaryProps{
  children: React.ReactNode,
  fallback : React.ReactNode,
}

interface ModalSearchProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavbarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  data: Array<string>;
  pageName: string;
  state: [string, React.Dispatch<React.SetStateAction<string>>];
}

interface FilterProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  data: Array<string>;
  pageName: string;
  role: string;
  setRole: React.Dispatch<React.SetStateAction<string>>;
  showDropdown: string | null;
  setShowDropdown: React.Dispatch<React.SetStateAction<string | null>>;
}

interface SidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  data: Array<string>;
  pageName: string;
  state: [string, React.Dispatch<React.SetStateAction<string>>];
  dir: {
    parents: string[]; 
    dir: string;
  };
}

interface KeyboardNavigationProps {
  selectedIndex: number | null;
  setSelectedIndex: (index: number | null) => void;
  itemRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

interface IndexPageProps extends PageProps {
  data: Data
  pageContext: {
    pageName: string
    all: string[]
  }
}

export {
  IndexPageProps,
  Data,
  FrontMatter,
  NestedDir,
  DataNode,
  Edge,
  Props,
  BackToTopProps,
  NoResultBoundaryProps,
  ModalSearchProps,
  NavbarProps,
  FilterProps,
  SidebarProps,
  KeyboardNavigationProps
}