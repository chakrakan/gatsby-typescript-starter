import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

interface ILayout {
  siteTitle?: string;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> &{` `}
          <a href="https://www.typescriptlang.org/">TypeScript</a>
        </footer>
      </div>
    </>
  );
};

export default Layout;
