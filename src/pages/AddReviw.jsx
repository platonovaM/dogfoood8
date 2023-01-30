import React,{useContext, useState}from "react";
import Ctx from "../Ctx"
import {Row, Col,Form, Button} from "react-bootstrap"
import{useParams, Link, useNavigate} from "react-router-dom";


export default()=>{
    const{id}=useParams();
    const [text, setText] = useState("");
    const{api, PATH}=useContext(Ctx);
    const navigate =useNavigate();
    const clear=(e)=>{
        setText("");
    }
    const handler =(e)=>{
        e.preventDefault();

        let body = {
            text: text || "Нет отзыва",
        }

        console.log(body);
        api.addReview(id,body)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data.error) {
                    clear();
                    navigate(`${PATH}catalog/${data._id}`);
                }
            })
    }
    const btnStyle={
        cursor:"pointer",
        height: "40px",
        borderRadius:"40px"
        
    }
    return<>
    <h1>Ваш отзыв о товаре </h1>
    <Form onSubmit={handler}> 
        <Row>
            <Col xs ={12} md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label><h6>Напишите ваше мнение</h6></Form.Label>
                        <Form.Control as="textarea" rows={4} value={text} onChange={e=>setText(e.target.value)} />
                    </Form.Group>
                    <Button variant={"warning"} type="submit" style={btnStyle}><h5>Отправить отзыв</h5></Button>
            </Col>
        </Row>
    </Form>
    </>
}
 