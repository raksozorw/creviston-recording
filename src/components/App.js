import React from 'react';
import Header from "./Header"
import TitlePic from './TitlePic';
import Equipment from './Equipment';
import About from './About';
import Clients from './Clients';
import Contact from './Contact';
import '../styles.css';




function App() {


  return (
    <div className="App">
      <section id="home"></section>
      <Header />
      <TitlePic />
      <section id="section-1"></section>
      <Equipment />
     
      <About />
      <section id="section-3"></section>
      <Clients />
      <section id="section-4"></section>
      <Contact />
      

      <hr></hr>
    </div>
  );
}

export default App;