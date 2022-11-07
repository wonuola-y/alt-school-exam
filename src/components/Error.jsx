import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
export default function Error() {
  return (
    <div className="error-section">
      <Helmet>
        <title>Error page</title>
        <meta name="description" content="Error page"/>
      </Helmet>
      <hr />
      <img className="img"
        src={"https://cdn-icons-png.flaticon.com/512/5680/5680361.png"}
        alt="404"
      />
      <h1 className="error">Error 404</h1>{" "}
      <button className="button">
        <Link className="link" to="/">
          Let's take you back home
        </Link>
      </button>
    </div>
  );
}
