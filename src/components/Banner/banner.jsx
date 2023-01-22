import React from "react";
import "./banner.css";
import{Link} from "react-router-dom";

export default () => {
    return <>
    <div className="banner">
       <h1>Крафтовые<br/>лакомства для<br/>собак</h1>
       <h3>Всегда свежие лакомства ручной<br/> работы с доставкой по России и Миру</h3>
       <button className="btn__banner"><Link to="/catalog">Каталог<span><i class="fa-solid fa-chevron-right"></i></span></Link></button>
    </div>
    </>
}