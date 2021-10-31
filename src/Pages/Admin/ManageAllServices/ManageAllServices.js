import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ManageAllServices = () => {
    const [allOrders,setAllOrders]=useState([]);
    useEffect(()=>{
        fetch("https://shrieking-catacombs-12008.herokuapp.com/allOrders")
        .then(res => res.json())
        .then(data=>{
            setAllOrders(data);
        })
    },[])
    // ----------------------delete
    const handleDelBtn=(id)=>{
        const proceed=window.confirm('Are You Sure?');
        if(proceed){
            console.log(allOrders);
        console.log(id);
        fetch(`https://shrieking-catacombs-12008.herokuapp.com/orderDelete/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.deletedCount>0){
               const remaining=allOrders.filter(p=> p._id !== id)
               setAllOrders(remaining);
            }
           
        })
        }
    }
   
    return (
        <div>
            <h2>Manage All Orders</h2>
                   
            {
                allOrders.map((order,index)=><Container>
                <Row className="p-5 bg-light align-items-center">
                    <Col md={1}>{index}.</Col>
                    <Col md={4}>{order?.email}</Col>
                    <Col md={2}>{order?.username}</Col>
                    
                    <Col md={4}>
                    <Card >
                    <Card.Img variant="top" src={order?.img}/>
                        <Card.Body>
                            <Card.Title>{order?.name}</Card.Title>
                            <Card.Text >Price ${order?.price}</Card.Text>
                           
                        </Card.Body>
                   </Card>
                    </Col>
                    <Col md={2} className="d-md-flex justify-content-center ">
                    <button  className="btn btn-warning m-3">{order?.status}</button>
                    <button onClick={()=>handleDelBtn(order?._id)}  className="btn btn-danger m-3">Delete</button></Col>
                    <hr />
                </Row>
                </Container>)
            }

        </div>
    );
};

export default ManageAllServices;