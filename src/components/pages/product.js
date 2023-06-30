import React from "react";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";

import products from "../../products";

function counter() {
  var count = 0;

  return function counter1() {
    return count++;
  };
}

var c = counter();

console.log(c());
console.log(c());
console.log(c());
console.log(c());

const Product = () => {
  const params = useParams();
  const product = products.find((item) => {
    return item._id === params.id;
  });

  return <div>{product && <div>this</div>}</div>;
};

export default Product;
