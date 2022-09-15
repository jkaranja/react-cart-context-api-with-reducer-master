import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Filter = () => {
  const { filterDispatch,
    filterState: { byStock, byFastDelivery, byRating, sort },
  } = CartState();

  return (
    <Row className=" pt-5 px-4 bg-dark">
      <Col className="text-white">
        <h2>Filter products</h2>
        <Form.Group className="my-3">
          <Form.Check
            checked={sort === "lowToHigh" ? true : false}
            type="radio"
            name="stacked"
            id={`default-1`}
            label="Ascending"
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRICE", payload: "lowToHigh" })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            checked={sort === "highToLow" ? true : false}
            name="stacked"
            type="radio"
            label="Descending"
            id={`disabled-default-2`}
            onChange={() =>
              filterDispatch({ type: "SORT_BY_PRICE", payload: "highToLow" })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Include Out of Stock"
            id={`disabled-default-3`}
            onChange={() => filterDispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
            checked={byStock}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Fast Delivery Only"
            id={`disabled-default-`}
            onChange={() => filterDispatch({ type: "BY_FAST_DELIVERY" })}
            checked={byFastDelivery}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Rating pointer = {{ cursor: "pointer" }} filterDispatch={filterDispatch} rating={byRating} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Button
            variant="light"
            onClick={() => filterDispatch({ type: "CLEAR_FILTER" })}
          >
            Clear Filters
          </Button>
        </Form.Group>
      </Col>
    </Row>
  );
};

export default Filter;
