import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";
import SingleProduct from "../components/SingleProduct";
import { CartState } from "../context/Context";

const Home = () => {
  const {
    state: { products, searchQuery },
    filterState: { byStock, byFastDelivery, byRating, sort },
  } = CartState();

  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState([]);

 
  let filteredProducts = products;

   if (sort) {
    filteredProducts = filteredProducts.sort((a, b) =>
      sort === "lowToHigh" ? a.price - b.price : b.price - a.price
    );
  }

  if (!byStock) {
    filteredProducts = filteredProducts.filter((item) => item.inStock);
  }

  if (byFastDelivery) {
    filteredProducts = filteredProducts.filter((item) => item.fastDelivery);
  }

  if (byRating) {
    filteredProducts = filteredProducts.filter(
      (item) => item.ratings === byRating
    );
  }

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
  }

  useEffect(() => {
    currentPage === 1
      ? setPaginatedData(filteredProducts.slice(0, 10))
      : setPaginatedData(filteredProducts.slice(10));
  }, [currentPage, filteredProducts]);

  return (
    <Container fluid className="">
      <Row>
        <Col xs="auto">
          <Filter />
        </Col>
        <Col className="d-flex flex-row flex-wrap">
          {filteredProducts.map((prod, i) => {
            return (
              <Col className="mx-3 py-3">
                <SingleProduct product={prod} key={i} />
              </Col>
            );
          })}
          <Col xs={12} className="text-center">
            <Pagination
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
