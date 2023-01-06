import React from "react";
import "./advertbottom.css";
import Roga from "./roga.png";
import Training from "./dress.png";

export default () => {
    return <>
    <div className="advertbottom__main">
    <div className="advert__bottom_1">
        <div className="advertbottom__text_1">
       <h1>Pога<br/>северного оленя</h1>
       <h3>от 10 до 30 кг</h3>
       </div>
        <img className="advertbottom__img_1" src={Roga}></img>
        </div>
        <div className="advert__bottom_2">
        <div className="advertbottom__text_2">
       <h1>Наборы</h1>
       <h3>для дрессировки</h3>
       <h1>от 800 рублей</h1>
       </div>
        <img className="advertbottom__img_2" src={Training}></img>
        </div>
    </div>
    </>
}