import React from "react";
import "./advert.css";
import Food from "./food.png";

export default () => {
    return <>
    <div className="advert__main">
    <div className="advert">
        <div className="advert__text">
       <h1>Подарок за<br/>первый заказ</h1>
       <h3>Вкуснейший корм<br/> для лучших друзей</h3>
       </div>
        <img className="advert__img" src={Food}></img>
        </div>
    </div>
    </>
}