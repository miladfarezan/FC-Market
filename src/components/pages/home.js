import React from "react";
import { Row, Col } from "react-bootstrap";

import products from "../../products";
import Product from "../product/product";

const Home = () => {
  const center = {
    textAlign: "center",
  };
  return (
    <div>
      <h2 style={center}>محصولات</h2>
      <Row>
        {products.map((item) => {
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
