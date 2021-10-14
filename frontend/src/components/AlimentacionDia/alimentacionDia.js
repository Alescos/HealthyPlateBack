import "./alimentacionDia.css";
import { useState, useEffect } from "react";
import Receta from "../Receta/Receta.js";



function AlimentacionDia(){
    const [Recetas, setRecetas] = useState([]);

    useEffect(()=>{
        fetch("./json/Recetas.json")
        .then((response)=>response.json())
        .then((data)=>setRecetas(data));
    },[]);
    console.log(Recetas);
    
    return(
        <>
        <div className='bodyFoodDay'>
            <div className='foodBlock'>
                <h4 className='foodBlock_title'>Desayuno</h4>
            <Receta 
                name={'Carne Asada'}
                image={'./img/carne_asada.jpg'}
                idx={2}
            />
            </div>   
            <div className='foodBlock'>
            <h4 className='foodBlock_title'>Almuerzo</h4>
            <Receta 
                name={'Pollo Teriyaki'}
                image={'./img/teriyaki.jpg'}
                idx={1}
            />
            </div>   
            <div className='foodBlock'>
                <h4 className='foodBlock_title'>Cena</h4>
            <Receta 
                name={'Hmburguesa Vegeatariana'}
                image={'./img/hamburguesa_vegetariana.jpg'}
                idx={1}
            />
            </div>   
        </div>
        </>
    );
}

export default AlimentacionDia;