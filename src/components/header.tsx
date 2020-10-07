import { Link } from "gatsby";
import React from "react";

interface IHeader {
  siteTitle: string;
}

const Header: React.FC<IHeader> = ({ siteTitle }) => {
  return (
    <header
      style={{
        background: `hsla(14, 100%, 53%, 0.6)`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
