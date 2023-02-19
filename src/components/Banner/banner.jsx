import React, {useContext} from "react";
import "./banner.css";
import{Link} from "react-router-dom";
import Ctx from "../../Ctx";
import BannerFoto from "./b1.png"

export default () => {
    const { PATH }=useContext(Ctx);
    return <>
    <div className="banner">
    <div className="banner-text">
       <h1>Крафтовые<br/>лакомства для<br/>собак</h1>
       <h3>Всегда свежие лакомства ручной<br/> работы с доставкой по России и Миру</h3>
       <Link to={PATH +"catalog"} className="btn__banner">Каталог<span><i class="fa-solid fa-chevron-right"></i></span></Link>
       </div>
       <img className="banner__img" src={BannerFoto}></img>
    </div>
    </>
}