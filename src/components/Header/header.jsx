import React, {useState} from "react";
import Search from "../Search/search";
import "./header.css";
import Logo from "./logo (1).svg";
import Like from "./ic-favorites.svg";
import Basket from "./ic-cart.svg";
import Profile from "./ic-profile.svg";

export default ({user, setUser, products, setModalActive}) => {
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
        <a className="logo" href=""><img src={Logo}></img></a>
        <Search data={products}/>
        <a className="like" href=""><img src={Like}></img></a>
        <a className="basket" href=""><img src={Basket}></img></a>
        <nav className="menu">
           {user && <a href="">{user}</a>}
            {!user && <a href="" onClick={logIn}><img className="profile" src={Profile}></img></a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}