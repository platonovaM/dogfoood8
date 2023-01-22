import React, {useState} from "react";
import Search from "../Search/search";
import {Link} from "react-router-dom";
import "./header.css";
import Logo from "./logo (1).svg";
import Like from "./ic-favorites.svg";
import Basket from "./ic-cart.svg";
import Profile from "./ic-profile.svg";

export default ({user, setUser, goods,searchGoods, setModalActive}) => {
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
        <Link className="logo" to="/"><img src={Logo}></img></Link>
        <Search data={goods} searchGoods={searchGoods}/>
        <a className="like" href=""><img src={Like}></img></a>
        <a className="basket" href=""><img src={Basket}></img></a>
        <nav className="menu">
           {user && <Link to="/profile">{user}</Link>}
            {!user && <a href="" onClick={logIn}><img className="profile" src={Profile}></img></a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}