import "./Header.css";
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import MydModalWithGrid from '../ModalRecipe/ModalRecipe.js'

import {useState } from "react";


function Header(){
  const [showModal, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Container>
        <Navbar className="main-nav" collapseOnSelect expand="lg">
          <Container>
            <Navbar.Brand className="NavbarTitle" href="/">
            <img alt="" src='./img/icons/salad.svg' width="50" height="50"className="d-inline-block"/><span className="NavbarTitle">  HealthyPlate</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Form className="d-flex">
                <FormControl type="search" placeholder="Buscar recetas" className="mr-2" aria-label="Search"/>
                <Button variant="outline-secondary">Buscar</Button>
              </Form>
              <Nav>
                <NavDropdown title="Filtrar" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Desayuno</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Almuerzo</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Cena</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="mx-auto">
                <Nav.Link href="/">General</Nav.Link>
              </Nav>
              <MydModalWithGrid show={showModal} onHide={handleClose} />
              <Nav className="me-auto">
                <Nav.Link href="MiEspacio">Mi espacio</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="MiPerfil">
                <img alt="" src='./img/icons/user.svg' width="35"height="35"/>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </Container>
  )
}

export default Header;
