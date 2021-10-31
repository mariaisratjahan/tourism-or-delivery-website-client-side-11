import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import useAuth from './../../hooks/useAuth';

const MyOrder = () => {
    const {user}=useAuth();
    const [myOrders,setMyOrders]=useState([]);
   
    useEffect(()=>{
      fetch(`http://localhost:5000/orders/${user?.email}`)
      .then(res => res.json())
      .then(data => {
          setMyOrders(data)
      })

    },[])
    const handleDelBtn=(id)=>{
        const proceed=window.confirm('Are You Sure?');
        if(proceed){
            console.log(myOrders);
        console.log(id);
        fetch(`http://localhost:5000/orderDelete/${id}`,{
            method:"DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.deletedCount>0){
               const remaining=myOrders.filter(p=> p._id !== id)
               setMyOrders(remaining);
            }
           
        })
        }
    }
    return (
        <div>
            <h3>My Orders</h3>
            {
                myOrders.map((order,index)=><Row className="p-5 bg-light align-items-center">
                    <Col md={1}>{index}.</Col>
                    <Col md={3}>{order?.email}</Col>
                    <Col md={2}>{order?.username}</Col>
                    <Col md={1}>{order?.gender}</Col>
                    <Col md={3} className="m-3">
                    <Card style={{ width: '18rem',padding:"10px",margin:"10px" }}>
                        <Card.Body>
                            <Card.Title>{order?.name}</Card.Title>
                            <Card.Text >Price ${order?.price}</Card.Text>
                           
                        </Card.Body>
                   </Card>
                    </Col>
                    <Col md={2}><button onClick={()=>handleDelBtn(order?._id)} className="btn btn-danger m-5">Delete</button></Col>
                    <hr />
                </Row>)
               
            }
        </div>
    );
};

export default MyOrder;