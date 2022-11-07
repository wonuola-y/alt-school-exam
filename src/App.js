import React from "react";
import "./Style.css";
import { ErrorBoundary } from "react-error-boundary";
import { Link, Route, Routes } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

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
        <Link to="/">Return home</Link>
      </SyntaxHighlighter>
    </div>
  );
}
function Check() {
  return (
    <div className="main">
      {" "}
      <h1> Welcome to My Protofolio</h1>
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

            <Route path="nested" element={<Pagination />}>
              <Route path="nested2" element={<Api />} />
            </Route>

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
