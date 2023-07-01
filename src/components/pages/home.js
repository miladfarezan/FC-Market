import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

import Product from "../product/product";
import Products from "../../products";

const Home = () => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:8000/api/products").then((res) => {
  //     setProducts(res.data);
  //   });
  // }, []);

  const center = {
    textAlign: "center",
  };
  return (
    <div>
      <h2 style={center}>محصولات</h2>
      <Row>
        {Products.map((item) => {
          return (
            <Col sm={12} md={6} lg={4} key={item._id}>
              <Product product={item} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Home;
