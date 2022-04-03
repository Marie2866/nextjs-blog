import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink exact to="Sign-In" activeClassName="nav-active">
        Sign-in
      </NavLink>
    </div>
  );
};

export default Navigation;
