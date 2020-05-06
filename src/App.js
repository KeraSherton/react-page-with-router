import React from "react";
// import { useState } from "react";
import "./styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Page from "./layouts/Page";
import Navigation from "./layouts/Navigation";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <header>{<Header />}</header>
        <main>
          <aside>{<Navigation />}</aside>
          <section className="page">{<Page />}</section>
        </main>
        <footer>{<Footer />}</footer>
      </div>
    </Router>
  );
}

export default App;
