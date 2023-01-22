import React from "react";
import { useNavigate } from "react-router-dom";


export default({setUser, user})=>{
    const navigate = useNavigate();
    const logOut = (e)=>{
        e.preventDefault();
        setUser("");
        localStorage.removeItem("user8");
        navigate("/");
    }
    return<>
        <h1>Личный кабинет</h1>
        <p>{user}</p>
        <a href="" onClick={logOut}>Выйти</a>
    </>
}