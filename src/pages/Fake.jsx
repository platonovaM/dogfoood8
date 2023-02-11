import React from "react";
import {useParams}from "react-router-dom";

export default()=>{
    const{n, title}=useParams();
return<>
<h1>FakePage {n} 
<strong>{title}</strong>
Демонстрирует работу параметризованных запросов</h1>
</>
}