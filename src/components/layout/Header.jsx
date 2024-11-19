import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">LMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"> 
              <Nav.Link href="#home">
                <FontAwesomeIcon icon={faHouse} />&nbsp; Home
              </Nav.Link>
              <Nav.Link href="#link">
                <FontAwesomeIcon icon={faChartLine} /> &nbsp; Dashboard
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header