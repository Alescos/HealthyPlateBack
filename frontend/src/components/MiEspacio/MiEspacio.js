import "./MiEspacio.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Card} from 'react-bootstrap';


function MiEspacio() {
  return (
    <Container>
      <Row>
        <Col>
          <Card as="a" className="CardMiEspacio" href="RecetasGuardadas">
            <Card.Body className="CardMiEspacioBody">
              <Card.Title className="CardTitle">
              <span>Recetas<br />guardadas</span></Card.Title>
              <Card.Text className="CardText">
              <span>

                Guarda las recetas que más te <br />
                gusten en un solo espacio

                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card as="a" className="CardMiEspacio" href="AlimentacionDia">
            <Card.Body className="CardMiEspacioBody">
              <Card.Title className="CardTitle"><span>Alimentación <br /> del día</span></Card.Title>
              <Card.Text className="CardText">
              <span>

                Conoce nuestra sugerencia diaria<br />
                de alimentos para una dieta más variada

              </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default MiEspacio;
