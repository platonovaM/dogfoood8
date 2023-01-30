import React,{useState, useEffect, useContext} from "react";
import{useParams, Link, useNavigate} from "react-router-dom";
import{Trash3Fill, Star, StarFill, Heart, MinecartLoaded, Award} from "react-bootstrap-icons"
import Review from "../components/Review/review";
import Ctx from "../Ctx";
import Button from 'react-bootstrap/Button';


export default({rating, pictures,name, price, description})=>{
    const{id}=useParams();
    const [product, setProduct] =useState({});
    const [review, setReview]=useState({});
    const { api, PATH, user, setGoods} = useContext(Ctx);
    const navigate =useNavigate();
    useEffect(() => {
        api.getProduct(id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProduct(data);
            })
        
    }, []);
   
    useEffect(() => {
        api.getReview(id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReview(data);
            })
    }, []);

    const btnSt={
        position:"absolute",
        right: "20px",
        top: "120px",
        cursor:"pointer",
        height: "auto"
    }
    const btnStyle={
        cursor:"pointer",
        height: "40px",
        borderRadius:"40px"
        
    }
    const  remove=()=>{
        api.delProduct(id)
        .then(res=>res.json())
        .then(data=>{
            if(!data.error){
                setGoods(prev=>{
                    return prev.filter(g=>g._id!==data._id)
                })
                navigate(`${PATH}catalog`);
            }
        })
    }
    let stars=[];
    const setRating =(n)=>{
        for(let i=0; i<n;i++){
            stars.push(<StarFill key={i}/>);
        }
        for(let i=stars.length; i<5;i++){
            stars.push(<Star key={i}/>);
        }
        return stars;
    }
    return<div className="product_site">
    { product&&product.author&&  product.author._id===user._id &&
    <button onClick={remove} className="btn" style={btnSt}><Trash3Fill/></button>
    }
    {<div className="btn_link">
        <Link to={PATH +"catalog"}>Назад</Link>
    </div> }
        <h1>{product.name|| "Страница товара"}</h1>
        <div className="img_disc_price">
        <div className="image_discount">
            <div className="rating_stars">{setRating(product.rating)}</div>
        {product.discount ? 
        <div className="discount"><h6>-{product.discount}%</h6></div>: ""
         }
    <img src={product.pictures} alt={product.name} style={{height:"300px"}}/>
    </div>
    <div className="price_product"><h4>{product.price} ₽</h4>
    <Button variant={"light"} style={btnStyle}><h5>В корзину</h5></Button>
    <div className="saved_products"><Heart/><h6> В избранное</h6></div>
    <div className="delivery"><MinecartLoaded className="MinecartLoaded"/><h6>Доставка по всему миру!</h6></div>
    <div className="warranty"><Award className="MinecartLoaded"></Award>
    <div className="warranty_text"><h6>Гарантия качества</h6> <p>Если Вам не понравилось <br/>качество нашей продукции,<br/> мы вернем деньги.</p></div></div>
    </div>
    </div>
    <h4>Описание </h4>
    {product.description ?
    <div className="description">{product.description}</div>: "Описание скоро появится"}
         <h4>Характеристики</h4>
        <h6>Цена........... {product.price}</h6>
    {product.wight && <h6>Вес...........{product.wight}</h6>}
         <h2>Отзывы</h2>
          <Link to ={PATH+`addRew/${product._id}`}> <Button variant={"light"} style={btnStyle}><h5>Написать отзыв</h5></Button></Link>
    <div className="reviews"> 
        {product.reviews && product.reviews.length>0&& product.reviews.map((el,i)=><Review{...el} key={i}/>)}
        <h1>{review.text}</h1>
    </div>
    </div>
}