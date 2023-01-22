import React, { startTransition   } from "react";
import {Star, StarFill} from "react-bootstrap-icons";


export default({author, rating, created_at,text}) =>
{   
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
    return <>
    <div className="review">
    <h3>{author||""}</h3>
    <p>Текст отзыва:</p>
    <h3>{text||""}</h3>
    <div>{setRating(rating)}</div>
    <div>{new Date(created_at).toLocaleString()}</div>
    <h3>{author||""}</h3>
    </div>
    </>
}