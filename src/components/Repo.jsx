import React, { useEffect } from "react";
import { useState } from "react"
import Pagination from './Pagination';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Pagining = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <div key={number} className='pg'>
            <Button onClick={() => paginate(number)} href='#' className='pag-link '>
              {number}
            </Button>
          </div>
        ))}
      </ul>
    </nav>
  );
};

function Repo() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    const getRepo = async () => {
      setLoading(true);
      const response = await fetch(
           `https://api.github.com/users/wonuola-y/repos`
      );
      const data = await response.json();
      setItems(data);
      setLoading(false);
    };
    getRepo();
  }, []);
  console.log(items);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

return(
  <>
  <div className='container mt-5'>
  
 <div className="pages">
  <Pagination items={currentPosts} loading={loading} />
  <Pagining
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
      />

 </div>
  </div>
  </>
)
}

export default Repo;
