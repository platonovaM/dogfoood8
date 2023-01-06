import React from "react";
import "./banner.css";

export default () => {
    return <>
    <div className="banner">
       <h1>Крафтовые<br/>лакомства для<br/>собак</h1>
       <h3>Всегда свежие лакомства ручной<br/> работы с доставкой по России и Миру</h3>
       <button className="btn__banner"><a href="">Каталог<span><i class="fa-solid fa-chevron-right"></i></span></a></button>
    </div>
    </>
}