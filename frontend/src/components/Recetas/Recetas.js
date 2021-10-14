import "./Recetas.css";
import Carrousel from "../Carrousel/Carrousel.js";

function Recetas(){
    
    return(
        <>
        <div>
            <div className="subtitle">
                <h4>Desayuno</h4>
            </div>
            <Carrousel
                timeToEat='Desayuno'
            />
        </div>
        <div>
            <div className="subtitle">
                <h4>Almuerzo</h4>
            </div>
            <Carrousel
                timeToEat='Almuerzo'
            />
        </div>
        <div>
            <div className="subtitle">
                <h4>Cena</h4>
            </div>
            <Carrousel
                timeToEat='Cena'
            />
        </div>
        </>
    );
}
export default Recetas;