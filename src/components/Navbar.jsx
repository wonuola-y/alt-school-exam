import React from "react";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <Helmet>
        <title>Navbar</title>
        <meta name="description" content="Navbar tag" />
      </Helmet>
      <div className="menu"> </div>
      <ul className="navs">
        <li className="logo">MY REPO</li>

        <NavLink className="link" to="/">
          Home
        </NavLink>

        <NavLink className="link" to="/Repo">
          Repos
        </NavLink>

        <NavLink className="link" to="/Error">
          404 page
        </NavLink>
        <NavLink className="link" to="/Paging">
          Error Boundary
        </NavLink>
      </ul>
    </div>
  );
}

export default Navbar;
