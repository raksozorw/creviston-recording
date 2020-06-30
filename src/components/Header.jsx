import React, {useEffect} from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



const Header = () => {



        return <div className="header">

                <Navbar bg="" expand="lg" fixed="top" className="nav-color" variant="dark">
                        <Navbar.Brand className="main-title" href="#home"><h2>tim creviston</h2></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
                        <Navbar.Collapse id="basic-navbar-nav">
                                <div className="order-3">
                                        <Nav className="mr-auto order-3">
                           
                                                <Nav.Link className="header-links" href="#section-1"> <h4>studio</h4></Nav.Link>
                                                <Nav.Link className="header-links" href="#section-2"><h4>about</h4></Nav.Link>
                                                <Nav.Link className="header-links" href="#section-3"> <h4>clients</h4> </Nav.Link>
                                                <Nav.Link className="header-links" href="#section-4"><h4>contact</h4></Nav.Link>
                                            
                                             
                                  

                                        </Nav>
                                </div>
   
                        </Navbar.Collapse>
                </Navbar>
        </div>

};

export default Header

// need to make the links scroll, style the navbar 