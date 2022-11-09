import React from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";




function Pagination() {
  const { loading } = useParams();
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    
<>
<Helmet>
        <title>Github Repo</title>
        <meta name="description" content="Github repo page" />
      </Helmet>
<div className="total-notice">
<h1 className="notice1">Uh no! <br/> I had trobule building this section of the site</h1>

<div className="notice">
<p>Never the less please visit my github repo</p>

<button><a href="https://github.com/wonuola-y">My repo</a></button>
</div>
</div>
  </>
  )
}

export default Pagination;
