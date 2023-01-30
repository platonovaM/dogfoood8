import React, {useContext} from "react";
import Search from "../Search/search";
import {Link} from "react-router-dom";
import "./header.css";
import Logo from "./logo (1).svg";
import Like from "./ic-favorites.svg";
import Basket from "./ic-cart.svg";
import Profile from "./ic-profile.svg";
import Ctx from "../../Ctx";
import {PlusSquare}from "react-bootstrap-icons"

export default ({ }) => {
    const {user, setUser,  setModalActive, PATH }=useContext(Ctx);


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
        <a className="like" href=""><img src={Like}></img></a>
        <a className="basket" href=""><img src={Basket}></img></a>
        <nav className="menu">
            {user &&<Link to ={PATH+"add"}><PlusSquare style={{fontSize: "20px"}}/></Link>}
           {user && user.name &&<Link to={PATH+"profile"}>{user.name}</Link>}
            {!user && <a href="" onClick={logIn}><img className="profile" src={Profile}></img></a>}
            {user && <a href="" onClick={logOut}>Выйти</a>}
        </nav>
    </header>
}