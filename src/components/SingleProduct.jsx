import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const SingleProduct = ({ product }) => {
  const { dispatch, state: {cart} } = CartState();

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price.split(".")[0]}</Card.Text>
        <Card.Text>Items in stock: {product.inStock}</Card.Text>
        <Card.Text>
          {product.fastDelivery ? (
            <span>Fast delivery</span>
          ) : (
            <span>Delivered in 5 days</span>
          )}
        </Card.Text>
        <Card.Text>
          <Rating rating={product.ratings} />
        </Card.Text>

        {cart.some((item) => item.id === product.id) ? (
          <Button
            variant="danger"            
            onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: product })}
          >
            Remove from cart
          </Button>
        ) : (
          <Button
            variant="primary"
            disabled={!product.inStock}
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          >
            Add to cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default SingleProduct;
