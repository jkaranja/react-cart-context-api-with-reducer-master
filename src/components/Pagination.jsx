import React from "react";
import { Button } from "react-bootstrap";

const Pagination = ({ setCurrentPage, currentPage }) => {
  
  return (
    <div>
      {currentPage === 1 ? (
        <Button variant="dark" onClick={() => setCurrentPage(2)}>
          Next
        </Button>
      ) : (
        <Button variant="dark" onClick={() => setCurrentPage(1)}>
          Prev
        </Button>
      )}
    </div>
  );
};

export default Pagination;
