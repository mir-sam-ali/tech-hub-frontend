import React, { useState, useEffect } from 'react';
import './Pagination.css';
import { Pagination } from 'react-bootstrap';

const PaginationComponent = ({
  postsPerPage,
  totalPosts,
  paginate,
  nextPageHandler,
  prevPageHandler,
}) => {
  const pageNumbers = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbersToBeShown, setPageNumbersToBeShown] = useState([]);

  //console.log(pageNumbersToBeShown);

  const displayNewNumbersNext = (number) => {
    if (number % 5 === 1) {
      const pages = [];
      let i = number;
      while (i <= number + 4 && i <= pageNumbers.length) {
        pages.push(i);
        i += 1;
      }
      setPageNumbersToBeShown(pages);
    }
  };

  const displayNewNumbersPrev = (number) => {
    if (number % 5 === 0) {
      const pages = [];
      let i = number;
      while (i >= number - 4 && i >= 1) {
        pages.push(i);
        i -= 1;
      }
      setPageNumbersToBeShown(pages.reverse());
    }
  };

  useEffect(() => {
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
      pageNumbers.push(i);
    }
    console.log(pageNumbers.length);
    if (pageNumbersToBeShown.length === 0) displayNewNumbersNext(1);
  });

  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => {
          prevPageHandler();
          setCurrentPage(currentPage - 1);
          displayNewNumbersPrev(currentPage - 1);
        }}
        disabled={currentPage === 1}
      />
      <Pagination.Ellipsis disabled={currentPage <= 5} />
      {pageNumbersToBeShown.map((number) => (
        <Pagination.Item
          key={number}
          onClick={() => {
            paginate(number);
            setCurrentPage(number);
          }}
          active={currentPage === number}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Ellipsis
        disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
      />
      <Pagination.Next
        onClick={() => {
          nextPageHandler();
          setCurrentPage(currentPage + 1);
          displayNewNumbersNext(currentPage + 1);
        }}
        disabled={currentPage === Math.ceil(totalPosts / postsPerPage)}
      />
    </Pagination>
  );
};

export default PaginationComponent;