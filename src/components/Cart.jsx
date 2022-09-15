import React, { useMemo } from "react";
import { Button, Col, Row, Image, Form, Container } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { CartState } from "../context/Context";
import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const removeItem = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const totalAmount = useMemo(() => {
    return cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0);
  }, [cart]);

  return (
    <Container fluid>
      <Row>
        <Col className="py-4 px-4">
          <h3 className="border-bottom">Items in cart</h3>
          {cart.length ? (
            <>
              {cart.map((product, i) => {
                return (
                  <div className="cart border-bottom">
                    <Image
                      fluid
                      rounded
                      src={product.image}
                      alt={product.name}
                      style={{ height: 100, width: 150 }}
                    />
                    <div>
                      <p>{product.name}</p>
                      <p>${product.price.split(".")[0]}</p>
                    </div>

                    <span>
                      <Rating rating={product.ratings} />
                    </span>
                    <span>
                      <Form.Select
                        onChange={(e) =>
                          dispatch({
                            type: "UPDATE_QTY",
                            payload: { id: product.id, qty: e.target.value },
                          })
                        }
                      >
                        {[...Array(product.inStock)].map((item, i) => {
                          return (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          );
                        })}
                      </Form.Select>
                    </span>
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => removeItem(product)}
                    >
                      <FaTrashAlt size={28} />
                    </span>
                  </div>
                );
              })}
            </>
          ) : (
            <span>Cart is empty!</span>
          )}
        </Col>
        <Col md={3} className="bg-dark text-white py-4">
          <p>Number of items: {cart.length}</p>
          <p>Total amount: ${totalAmount}</p>
          <Button disabled={!cart.length} className="my-3" onClick={()=>alert("Please try again later!")}>
            Proceed to check out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
