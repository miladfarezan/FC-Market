import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Products from "../../products";

import "./product.css";
import axios from "axios";

const Product = () => {
  const params = useParams();
  // const [product, setProduct] = useState({});
  // useEffect(() => {
  //   axios.get(`http://localhost:8000/api/products/${params.id}`).then((res) => {
  //     setProduct(res.data);
  //   });
  // }, []);
  const product = Products.find((item) => {
    return item._id === params.id;
  });

  return (
    <div>
      <Link to="/" className="btn btn-light my-3 ">
        بازگشت به صفحه اصلی
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={3}>
          <ListGroup.Item variant="flush" className="py-3 product-description">
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item variant="flush" className="py-3 product-description">
            {product.price}
          </ListGroup.Item>
          <ListGroup.Item variant="flush" className="py-3 product-description">
            {product.description}
          </ListGroup.Item>
        </Col>
        <Col md={3}>
          <Button className="btn-block" type="button">
            افزودن به سبد خرید
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Product;
