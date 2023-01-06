import React, {useState,useEffect} from "react";
import "./style.css";
import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";
import Banner from "./components/Banner/banner";
import Advert from "./components/Advert/advert";
import AdvertBottom from "./components/AdvertBottom/advertbottom"
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import {Api} from "./Api.js";
const smiles = [<span>^_^</span>, "=)", "O_o", ";(", "^_0", "@_@", "–_–"];

const App = () => {
    
const [user, setUser] = useState(localStorage.getItem("user"));
const [token, setToken] = useState(localStorage.getItem("token8"));
const [modalActive, setModalActive] = useState(false);
const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        console.log("Hello!")
        console.log(token);
        if (token) {
            // загрузить данные с сервера
            api.getProducts()
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setGoods(data.products);
                })
        }
    }, []) // функция отработает один раз при создании компонента

    useEffect(() => {
        console.log("Change token");
        setApi(new Api(token));
        setUser(localStorage.getItem("user8"));
    }, [token])

    useEffect(() => {
        if (!user) {
            localStorage.removeItem("token8");
            setToken(null);
        }
    }, [user])

    useEffect(() => {
        if (token) {
            // загрузить данные с сервера
            api.getProducts()
                .then(res => res.json())
                .then(data => {
                    setGoods(data.products);
                })
        }
    }, [api])
    return (
        <>
        <div className="container">
            <Header 
                user={user} 
                setUser={setUser} 
                products={products} 
                setModalActive={setModalActive}
            />
            <main>
             <Banner/>
             <Advert/>
             <div className="main__site">
            {user ? <Catalog data={goods}/> : <Home data={products}/>}
            <AdvertBottom/>
            </div>
            </main>
            <Footer/>
        </div>
        <Modal isActive={modalActive} setState={setModalActive} api={api} setToken={setToken}/>
    </>
    )
}
export default App;