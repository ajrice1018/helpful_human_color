import React from 'react';

const Pagination = ({ colorsPerPage, totalColors, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalColors / colorsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    
      <a className='pagination'>
        {pageNumbers.map(number => (
          <a key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </a>
          </a>
        ))}
      </a>
    
  );
};

export default Pagination;