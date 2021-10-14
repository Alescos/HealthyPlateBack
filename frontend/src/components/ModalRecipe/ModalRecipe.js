import "./ModalRecipe.css";

import { Modal, Row, Col, Container, Button, Image } from 'react-bootstrap';
import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import configData from "../../config.json";



function MydModalWithGrid(props) {
  const { id } = useParams();

  const [ heartActive, setHeartState ] = useState(false);
  
  const [Receta, setReceta] = useState([]);
    /* useEffect(()=>{
        fetch(`./json/id/${props.id}.json`)
        .then((response)=>response.json())
        .then((data)=>setReceta(data));
    },[]);
    */
    /* if (props.ingredients) {
       console.log(Receta);+
    } */
    useEffect(()=>{
      fetch(`${configData.SERVER_URL}/recetas/${id}`, {
        method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json'}),
        mode: 'no-cors'
}, [id])
      .then((response)=>response.json())
      .then((data)=>setReceta(data));
  },[]);
  console.log(Receta);
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className="Modal" size="lg"
      centered>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="Title">
          {Receta.name}
        </Modal.Title>
      <i className={ `bi bi-heart ${heartActive ? 'bi bi-heart-fill':"" }`} onClick={() => setHeartState(!heartActive)} id="heart"></i>

      </Modal.Header>
      <Modal.Body className="show-grid ModalBody">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={7} className="m-auto">
                <Image className="recipeImg d-block img-fluid" src={Receta.image} rounded />
            </Col>
            <Col xs={12} md={12} lg={5}>
              <Row> <div className="ingredientsTitle"><span className="boldTitles">Ingredientes</span></div>
              </Row>
              <Row>
                <Container> 
                  <Row className="ingredientsContent">
                    <Col>
                      <div className="text-center">Banano</div>
                    </Col>
                    <Col>
                      <div className="text-center">Fresa</div>
                    </Col>
                  </Row>
                  <Row className="ingredientsContent">
                    <Col>
                      <div className="text-center">Mora</div>
                    </Col>
                    <Col>
                      <div className="text-center">Yogurt Griego</div>
                    </Col>
                  </Row>
                  <Row className="ingredientsContent">
                    <Col>
                      <div className="text-center">Granola</div>
                    </Col>
                    <Col>
                      <div className="text-center">Semillas de chía</div>
                    </Col>
                  </Row>
                </Container>
              </Row>
              <Row className="preparacionRow">
              <div className="preparacionDiv">
              <span className="boldTitles">Preperación: </span> {Receta.preparation}</div>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={7} className="contNutricional">
              <Container>
                <Row>
                    <Col>
                      <Row>
                        <div className="text-center">{Receta.calories}</div>
                      </Row>
                      <Row>
                        <div className="text-center boldTitles">Calorías</div>
                      </Row>
                    </Col>
                    <Col>
                      <Row>
                          <div className="text-center">{Receta.proteins}</div>
                      </Row>
                      <Row>
                          <div className="text-center boldTitles">Proteínas</div>
                      </Row>
                    </Col>
                    <Col>
                    <Row>
                        <div className="text-center">{Receta.carbohidrates}</div>
                    </Row>
                    <Row>
                        <div className="text-center boldTitles">Carbs</div>
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        <div className="text-center">{Receta.fats}g</div>
                    </Row>
                    <Row>
                        <div className="text-center boldTitles">Grasas</div>
                    </Row>
                    </Col>
                </Row>
              </Container>
            </Col>
            <Col xs={12} md={5} className="categoria">
              <Container className="text-center">
                <Row>
                  <div className="text-center"><span className="boldTitles">Dificultad: </span>{Receta.difficulty}</div>
                </Row>
                <Row>
                  <div className="text-center"><span className="boldTitles">Tiempo: </span>{Receta.makingTime}</div>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className="ModalBody">
        <Button onClick={props.onHide} className="btnModalClose">Cerrar</Button>

      </Modal.Footer>
    </Modal>
  );
}

export default MydModalWithGrid;
