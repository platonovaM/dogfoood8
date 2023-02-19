import React from "react";
import "./footer.css";
import Logo from "./logo (1).svg";

export default () => {
    const year = new Date().getFullYear();
    return <footer>
        <div className="westen">
        <img src={Logo}></img>
        <p className="min_p">"Интернет-магазин DogFood.ru"</p>
        </div>
        <div className="nord">
            <p>Каталог</p>
            <p>Акции</p>
            <p>Новости</p>
            <p>Отзывы</p>
        </div>
        <div className="osten">
            <p>Оплата и доставка</p>
            <p>Часто спрашивают</p>
            <p>Обратная связь</p>
            <p>Контакты</p>
        </div>
        <div className="bott">
            <p className="p">Мы на связи</p>
            <p className="p">8 (999) 00-00-00</p>
            <p>dogfood.ru@gmail</p>
            <p>Контакты</p>
        </div>
    </footer>
}