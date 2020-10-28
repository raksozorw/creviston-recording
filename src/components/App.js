import React from "react";
import Header from "./Header";

import Equipment from "./Equipment";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import "../styles.css";
import Home from "./Home";
import Divider from "./Divider";

function App() {
  return (
    <div className='App'>
      <section id='home'></section>
      <Header />
      <Home />
      <Equipment />
      <Divider />
      <section id='about'></section>
      <About />
      <section id='clients'></section>
      <Clients />
      <section id='contact'></section>
      <Contact />

      <hr></hr>
    </div>
  );
}

export default App;
