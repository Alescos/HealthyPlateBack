import "./MiPerfil.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card, Form, Button, FloatingLabel, Dropdown} from 'react-bootstrap';

import React, {useState } from "react";

function MiPerfil() {
  const [value,setValue]=useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  return (
    <Container>
      <Row>
        <Col>
          <Card className="CardPerfil">
            <Card.Body>
              <Card.Title className="CardTitlePerfil text-center">
              <span>Mi Perfil<br /></span></Card.Title>
              <Card.Text>

              <Form>
              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Nombre completo">
                    <Form.Control />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle className="DropdownMiPerfil" id="dropdown-basic">
                    Género  <span> <img src="./img/icons/parents.svg" width="43px" height="43px" alt="no" /> </span>
                  </Dropdown.Toggle>
                                    <Dropdown.Menu>
                    <Dropdown.Item eventKey="mujer">Mujer</Dropdown.Item>
                    <Dropdown.Item eventKey="hombre">Hombre</Dropdown.Item>
                                      </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md>
                  <FloatingLabel  controlId="floatingInputGrid" label="Fecha de Nacimiento">
                    <Form.Control type="date"/>
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Estatura (cm)">
                    <Form.Control />
                  </FloatingLabel>
                </Col>
                <Col md>
                  <FloatingLabel controlId="floatingInputGrid" label="Peso (kg)">
                    <Form.Control />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                <Dropdown onSelect={handleSelect}>
                  <Dropdown.Toggle className="DropdownMiPerfil" id="dropdown-basic">
                    Dieta
                  </Dropdown.Toggle>
                                    <Dropdown.Menu>
                    <Dropdown.Item>General <span> <img src="./img/icons/healthy-food.svg" width="40px" height="40px" alt="no" /> </span></Dropdown.Item>
                    <Dropdown.Item>Saludable <span> <img src='./img/icons/smoothie.svg' width="40px" height="40px" alt="no" /> </span></Dropdown.Item>
                    <Dropdown.Item>Vegetariana <span> <img src='./img/icons/no-meat.svg' width="40px" height="40px" alt="no" /> </span></Dropdown.Item>
                                      </Dropdown.Menu>
                    </Dropdown>
                </Col>
              </Row>

              <Row className="g-2">
                <Col md>
                <Dropdown onSelect={handleSelect} >
                  <Dropdown.Toggle className="DropdownMiPerfil" id="dropdown-basic">
                    Objetivo
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item >Bajar de peso <span> <img src='./img/icons/diet.svg' width="40px" height="40px" alt="no" /> </span> </Dropdown.Item>
                    <Dropdown.Item >Ganar masa muscular <span> <img src='./img/icons/nuts.svg 'width="40px" height="40px" alt="no" /> </span></Dropdown.Item>
                  </Dropdown.Menu>
              </Dropdown>
                </Col>
              </Row>
              <Row className="g-2">
                <Button type="submit" className="modificarBtn">
                  Modificar
                </Button>
              </Row>
              </Form>
              </Card.Text>
            </Card.Body>

          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MiPerfil;
