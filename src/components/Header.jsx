import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    <div className='header'>
      <Navbar
        bg=''
        expand='lg'
        fixed='top'
        className='nav-color'
        variant='dark'
      >
        <Navbar.Brand className='main-title' href='#home'>
          TIM CREVISTON
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />

        <Navbar.Collapse id='basic-navbar-nav'>
          <div className='order-3'>
            <Nav className='mr-auto order-3'>
              <Nav.Link className='header-links' href='#about'>
                <h4>about</h4>
              </Nav.Link>
              <Nav.Link className='header-links' href='#clients'>
                {" "}
                <h4>clients</h4>{" "}
              </Nav.Link>
              <Nav.Link className='header-links' href='#contact'>
                <h4>contact</h4>
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

// need to make the links scroll, style the navbar
