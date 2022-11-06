import React from 'react';

export const Testing = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='pg'>
            <a onClick={() => paginate(number)} href='!#' className='pg-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
