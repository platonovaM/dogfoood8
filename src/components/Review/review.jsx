import React from "react";
import {Star, StarFill} from "react-bootstrap-icons";



export default({ rating, created_at,text}) =>
{    
    const setRating = (n) => {
    let stars = [];
    for (let i = 0; i < n; i++) {
        stars.push(<StarFill key={i}/>);
    }
    for (let i = stars.length; i < 5; i++) {
        stars.push(<Star key={i}/>);
    }
    return stars;

}

    return <>
    <div className="review">
    <div>{new Date(created_at).toLocaleString()}</div>
    <div className="rating_stars">{setRating(rating)}</div>
    <h3>{text||""}</h3>
    </div>

    </>
}