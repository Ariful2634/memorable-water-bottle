import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import './Style.css'
import { addToLS } from "./Store";



const Water = () => {
    const [water,setWater]=useState([])
    const [bottle,setBottle]=useState([])

    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setWater(data))
    },[])

    const bottleHandler = (bot)=>{
        const btl=[...bottle,bot]
        setBottle(btl);
        addToLS(bot.id)
    }

    return (
        <div>
            <h3>Total Bottle: {water.length} </h3>
            <h3>cart: {bottle.length}</h3>
            <div className="bol">
                
                {
                    bottle.map(bol=> <img key={bol.id} src={bol.img}></img>)
                    
                }
                
            </div>
            <div className="water">
                {
                    water.map(water => <Bottle key={bottle.id} water={water} bottleHandler={bottleHandler}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Water;