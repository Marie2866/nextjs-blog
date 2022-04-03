import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav>
      <Link exact to="/Home" activeClassName="nav-active">
        1
      </Link>
      <Link exact to="/Home2" activeClassName="nav-active">
        2
      </Link>
    </nav>
  );
};

export default Footer;
