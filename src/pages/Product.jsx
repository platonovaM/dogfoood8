import React,{useState, useEffect, useContext} from "react";
import{useParams, Link} from "react-router-dom";
import Review from "../components/Review/review";
import {Api} from "../Api.js";


export default({})=>{
    const{id}=useParams();
    const [product, setProduct] =useState({});
    const [review, setReview]=useState({});
    let token =localStorage.getItem("token8")
    const [api, setApi] = useState(new Api(token));
    useEffect(() => {
        if (token) {
        api.getProduct(id)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
        }
    }, []);
   
    useEffect(() => {
        if (token) {
        api.getReview(id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setReview(data);
            })
        }
    }, []);
    return<>
    <h1>{product.name|| "Страница товара"}</h1>
    <p>{id}</p>
    <div className="btn_link">
    <Link to="/catalog">Назад</Link>
    </div>
    <h2>Отзывы</h2>
    <div className="reviews">
        {product.reviews && product.reviews.length>0&& product.reviews.map((el,i)=><Review{...el} key={i}/>)}
        <h1>{review.text}</h1>
    </div>
    </>
}