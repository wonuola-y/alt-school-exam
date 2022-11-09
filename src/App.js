import React from "react";
import "./Style.css";
import { ErrorBoundary } from "react-error-boundary";
import { Link, Route, Routes } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Helmet } from "react-helmet-async";

import Error from "./components/Error";
import Pagination from "./components/Pagination";
import Contact from "./components/Contact";
import Paging from "./components/Paging";
import Repo from "./components/Repo";
import Navbar from "./components/Navbar";
import Api from "./components/Api";
function ErrorFallback({ error }) {
  return (
    <div role="alert" className="alert">
      <h1>This doesn't look right</h1>
      <p>Check this error message for more info</p>
      <SyntaxHighlighter language="javascript" style={github}>
        {error.message}
       
      </SyntaxHighlighter>
      <p>or  <Link to="/" onClick={()=>{window.location.reload(true);}}>Return home</Link>
    
      </p>
    </div>
  );
}
function Check() {
  return (
    <div className="main-total">
      {" "}
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Navbar tag" />
      </Helmet>
      <div className="main">
      <h1> Welcome to My Github Portfolio</h1>

<div>
<img src=" https://i.pinimg.com/564x/2a/13/a1/2a13a15206a4f561dfd7f7430b2d648f.jpg"alt="art" />
</div>
      </div>

    </div>
  );
}
function App() {
  return (
    <section>
      <div className="all">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Navbar />
          <BadComponent />
          <Routes>
            <Route path="Navbar" element={<Navbar />} />
            <Route path="*" element={<Error />} />
            <Route path="/" element={<Check />} />
            <Route path="Repo" element={<Repo />} />
            <Route path="nested" element={<Pagination />}/>
            <Route path="Api" element={<Api />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Paging" element={<Paging />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </section>
  );
}
function BadComponent() {
  let i;
  return [i];
}

export default App;
