import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/pages/home";
import Product from "./components/pages/product";

function app() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" Component={Home} exact />
            <Route path="/product/:id" Component={Product} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default app;
