import "./Carrousel.css";
import { useState, useEffect } from "react";
import Receta from "../Receta/Receta.js";
import configData from "../../config.json";


function Carrousel({timeToEat}){

    const [Recetas, setRecetas] = useState([]);

    useEffect(()=>{
        fetch(`${configData.SERVER_URL}/recetas`)
        .then((response)=>response.json())
        .then((data)=>setRecetas(data));
    },[]);


    return(
        <>
            <section className="carousel">
                <div className="carousel__container">
                    {Recetas.map((receta)=>{
                        if (receta.dayTime===timeToEat) {
                            return(
                                <Receta
                                    name={receta.name}
                                    image={receta.image}
                                    idx={receta._id.$oid}
                                />
                            );
                        }
                        return(null);
                    })}
                </div>
            </section>


        </>
    );
}
export default Carrousel;
