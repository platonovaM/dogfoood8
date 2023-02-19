import React, {useContext} from "react";
import Search from "../Search/search";
import {Link} from "react-router-dom";
import Logo from "./logo (1).svg";
import "./header.css";

import Basket from "./ic-cart.svg";
import Profile from "./ic-profile.svg";
import Ctx from "../../Ctx";
import {PlusSquare, HeartFill, Basket3}from "react-bootstrap-icons"
import{Badge} from "react-bootstrap"
import Favorites from "../../pages/Favorites";
export default ({ }) => {
    const {user, setUser,  setModalActive, PATH, favorites, basket }=useContext(Ctx);


    const logIn = (e) => {
        e.preventDefault();
        setModalActive(prev => !prev);
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }
    return <header>
        <Link className="logo" to={PATH}><img src={Logo}></img></Link>
        <Search />
        <nav className="menu">
            {user &&<Link to ={PATH+"favorites"} className="badge-link">
                <HeartFill style={{fontSize: "24px", color: "rgb(141, 20, 141)"}}/>
                 <Badge bg="danger" >{favorites.length}</Badge>
            </Link>}
            {user &&<Link to ={PATH+"basket"} className="badge-link">
                <Basket3 style={{fontSize: "24px", color: "rgb(141, 20, 141)"}}/>
                 <Badge bg="danger" >
                    {basket.reduce((acc,el)=>acc+el.cnt,0)}
                    </Badge>
            </Link>}
            {user &&<Link to ={PATH+"add"} >
                <PlusSquare style={{fontSize: "20px", color: "rgb(141, 20, 141)"}}/></Link>}
           {user && user.name &&<Link to={PATH+"profile"} className="name_btn">{user.name}</Link>}
            {!user && <img className="profile" onClick={logIn} src={Profile}></img>}

        </nav>
    </header>
}