import "./Receta.css";
import {Card} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useState } from "react";
import MydModalWithGrid from '../ModalRecipe/ModalRecipe.js'


function Receta({name, image, idx}){
    const [showModal, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <Card style={{width:'12rem'}} className="Card sm-2">
        <Link to="#" onClick={handleShow} className="Cardlink" >
        <Card.Img className="CardImage"variant="top" src={image} />
        <Card.Body className="CardBody">
            <Card.Subtitle className="CardSubtitle mb-2 text-muted">{name}</Card.Subtitle> 
        </Card.Body>
        </Link>
        <MydModalWithGrid id={idx} show={showModal} onHide={handleClose} />
    </Card>
    );
}

export default Receta;