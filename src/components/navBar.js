import React from 'react';
import '../App.css';
import {Container ,Nav , NavDropdown , Navbar , Carousel } from 'react-bootstrap/'
import logo from '../images/logo2.png';

export default function Header() {
  return (
    <>
      <div className="header_container">
             <div className="header_navbar">
             <Navbar collapseOnSelect expand="lg" bg="inherit" variant="dark">
              <Container>
              <Navbar.Brand href="#home">
                  <img src={logo} alt="logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
             </div>
             <div className="header_slider">
              <Carousel variant="dark">
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://resources.stuff.co.nz/content/dam/images/1/v/g/y/c/h/image.related.StuffLandscapeThreeByTwo.1151x768.1vgxyf.png/1560117084761.jpg"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://www.rnz.co.nz/assets/news_crops/99922/eight_col_Federal_Street_Auckland-_Credit_Glen-Koorey.jpg?1586640984"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://seekvectorlogo.com/wp-content/uploads/2018/05/nz-transport-agency-vector-logo.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
             </div>
             <br/>
             <div className="header_text">
               <h5>lorem Lorem Ipsum is simply industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</h5>
             </div>
         </div>
    </>
  );
}
