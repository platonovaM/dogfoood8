import React from "react";
import Card from "../components/Card";
import Banner from "../components/Banner/banner"
import Advert from "../components/Advert/advert"
import AdvertBottom from "../components/AdvertBottom/advertbottom"

export default ({data}) => {
    return <>
        <Banner/>
        <Advert/>
        <h1>Главная страница</h1>
       {/* <div className="cards">
            {data.map((el, i) => <Card key={"card_" + i} text={el.name} />)}
</div> */}
        <AdvertBottom/>
    </>
}