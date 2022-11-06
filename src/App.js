import React from "react";
import './Style.css'
import { ErrorBoundary } from "react-error-boundary";
import { Link, Route, Routes } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Error from "./components/Error";
import Pagination from "./components/Pagination";
import Contact from "./components/Contact";
import Paging from "./components/Paging";
import Repo from './components/Repo'
import NestRoute from './components/NestRoute';
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
      <h1> Welcome to The Users Hub</h1>
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
          <Route path="/NavList" element={<Navbar  />} />
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Check />} />
           <Route path="/Repo" element={<Repo />} />
          <Route path="/Pagination" element={<Pagination />}>
         
          <Route path="/Pagination2" element={<NestRoute />} />
          </Route>
          <Route path="/Api" element={<Api />}/>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Paging" element={<Paging />} />
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
