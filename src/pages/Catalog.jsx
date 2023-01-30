import React,{useContext} from "react";
import Card from "../components/Card";
import {Link} from "react-router-dom";
import {EmojiFrown} from "react-bootstrap-icons";
import Ctx from "../Ctx";

export default (data) => {
    const {visibleGoods, user, PATH}=useContext(Ctx);
    return <>
    {user&&<>
    {visibleGoods.length>0 
        ? <> 
            <h1>Каталог товаров</h1>
            <div className="cards">
                {visibleGoods.map((el, i) => <Link to={`/catalog/${el._id}`}>
                <Card key={"card_" + i} {...el}/>
                </Link>)}
            </div>
        </>
        :<div className="empty-block">
            <EmojiFrown/>
            <p > По вашему запросу ничего не найдено</p>
            <Link to="/" className="btn">На главную</Link>
        </div>
    }
    </>}
    {!user && <div className="empty-block">
            <EmojiFrown/>
            <p >Простите, у вас нет доступа к товарам. Пожалуйста, авторизуйтесь</p>
            <Link to={PATH} className="btn">На главную</Link>
        </div>}
    </>
}