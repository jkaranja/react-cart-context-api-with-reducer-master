import React, { useEffect, useState } from "react";
import { Badge, Button, Dropdown, Form, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    dispatch,
    state: { cart },
  } = CartState();

  useEffect(() => {
    dispatch({ type: "SEARCH", payload: searchTerm });
  }, [searchTerm]);

  const removeItem = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  

  return (
    <Navbar
      bg="info"
      sticky="top"
      variant="dark"
      expand="lg"
      className="shadow"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Jambo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form.Control
            type="text"
            className="m-auto w-50"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></Form.Control>

          <Nav>
            <Dropdown align="end">
              <Dropdown.Toggle variant="dark" id="dropdown-basic" size="sm">
                <FaShoppingCart color="white" size="20px" />
                <Badge bg="danger">{cart.length}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark" style={{ minWidth: 370 }}>
                {cart.length ? (
                  <>
                    {cart.map((product, i) => {
                      return (
                        <div className="cart" key={i}>
                          <Image
                            roundedCircle
                            src={product.image}
                            alt={product.name}
                          />
                          <div>
                            <p>{product.name}</p>
                            <p>${product.price.split(".")[0]}</p>
                          </div>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => removeItem(product)}
                          >
                            <FaTrashAlt size={28} />
                          </span>
                        </div>
                      );
                    })}

                    <Button className="mx-4 d-block" as={Link} to="cart">
                      View Cart Items
                    </Button>
                  </>
                ) : (
                  <span className="p-3">Cart is empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
