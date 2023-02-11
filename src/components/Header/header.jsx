import React, {useContext} from "react";
import Search from "../Search/search";
import {Link} from "react-router-dom";
import "./header.css";
import Logo from "./logo (1).svg";

import Basket from "./ic-cart.svg";
import Profile from "./ic-profile.svg";
import Ctx from "../../Ctx";
import {PlusSquare, Heart}from "react-bootstrap-icons"
import{Badge} from "react-bootstrap"
import Favorites from "../../pages/Favorites";

export default ({ }) => {
    const {user, setUser,  setModalActive, PATH, favorites }=useContext(Ctx);


    const logIn = (e) => {
        e.preventDefault();
        setModalActive(prev => !prev);
    }
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }

    const btnSt={
        color: "white",
        width: "120px",
        height:"38px",
        backgroundColor: "#611385",
        textDecoration: "none",
        borderRadius: "18px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textDecoration: "none"
    }

    const btnStyle={
        color: "#611385"
       
    }

    return <header>
        <Link className="logo" to={PATH}><img src={Logo}></img></Link>
        <Search />
        <a className="basket" href=""><img src={Basket}></img></a>
        <nav className="menu">
            {user &&<Link to ={PATH+"favorites"} className="badge-link" /*style ={btnStyle}*/>
                <Heart style={{fontSize: "20px"}}/>
                 <Badge bg="danger" >{favorites.length}</Badge>
            </Link>}
            {user &&<Link to ={PATH+"add"} className="badge-link" >
                <PlusSquare style={{fontSize: "20px"}}/></Link>}
           {user && user.name &&<Link to={PATH+"profile"} style ={btnSt} ><button style ={btnSt}>{user.name}</button></Link>}
            {!user && <button onClick={logIn}><img className="profile" src={Profile}></img></button>}
            {user && <button   onClick={logOut} style ={btnSt}>Выйти</button>}
        </nav>
    </header>
}