import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../../assets/styles/headerFooter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faChartLine } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="headerWrapper">
      <Navbar expand="md" >
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
      </div>
  )
}

export default Header