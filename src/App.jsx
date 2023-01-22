import React, {useState,useEffect} from "react";
import {Routes, Route }from "react-router-dom"
import "./style.css";
import products from "./assets/data.json";

import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Modal from "./components/Modal";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Profile from "./pages/Profile";
import Product from "./pages/Product"

import {Api} from "./Api.js";
const smiles = [<span>^_^</span>, "=)", "O_o", ";(", "^_0", "@_@", "–_–"];

const App = () => {
    
const [user, setUser] = useState(localStorage.getItem("user8"));
const [token, setToken] = useState(localStorage.getItem("token8"));
const [modalActive, setModalActive] = useState(false);
const [api, setApi] = useState(new Api(token));
const [goods, setGoods] = useState([]);
const [visibleGoods, setVisibleGoods] = useState(goods);

    useEffect(() => {
        if (token) {
            // загрузить данные с сервера
            api.getProducts()
                .then(res => res.json())
                .then(data => {
                    setGoods(data.products);
                })
        }
    }, []) // функция отработает один раз при создании компонента

    useEffect(() => {
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

    useEffect(()=>{
        setVisibleGoods(goods);
    },[goods])
    return (
        <>
        <div className="container">
            <Header 
                user={user} 
                setUser={setUser} 
                goods={goods}
                searchGoods={setVisibleGoods}
                setModalActive={setModalActive}
            />
            <main>
              {/* <div className="main__site"> 
             {user ? <Catalog data={goods}/> : <Home data={products}/>} 
             </div>  */}
            <Routes>
                <Route path="/" element={<Home data={smiles}/>}/>
                <Route path="/catalog" element={<Catalog data={visibleGoods}/>}/>
                <Route path="/profile" element={<Profile setUser={setUser} user={user}/>}/>
                <Route path="/catalog/:id" element={<Product/>}/>
            </Routes>
            </main>
            <Footer/>
        </div>
        <Modal isActive={modalActive} setState={setModalActive} api={api} setToken={setToken}/>
    </>
    )
}
export default App;