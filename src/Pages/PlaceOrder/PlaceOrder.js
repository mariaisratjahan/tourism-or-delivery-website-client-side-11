import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import useAuth from './../../hooks/useAuth';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const {user}=useAuth();
    const {id}=useParams();
    const [service,setService]=useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data =>{
          const sName=service.name;
          const sPrice=service.cost;
          const status="pending"
          const sEmail=user.email;
          data.name=sName;
          data.price=sPrice;
          data.status=status;
          data.email=sEmail;
          console.log(data);
          console.log(data);
          fetch('https://shrieking-catacombs-12008.herokuapp.com/bookingService',{
              method:"POST",
              headers:{
                  "content-type":"application/json"
              },
              body:JSON.stringify(data)
          })
          .then(res => res.json)
          .then(result =>{
              console.log(result);
              alert('booking done');
              reset();
          })
       
    };
    console.log(id);
    useEffect(()=>{
        fetch(`https://shrieking-catacombs-12008.herokuapp.com/singleService/${id}`)
        .then(res => res.json())
        .then(data=>{
            setService(data);
        })
    },[])
    return (
        <div>
          <div className="p-5 text-primary">
          <h4>Hello, {user?.displayName}</h4>
          <h6>email: {user?.email}</h6>
          </div>
            
             <div className="card-form-container d-md-flex justify-content-around align-items-start">
                 <div className="form-container">
                 <h4 className="text-danger">BOOK NOW</h4>
                 <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column form ">
     
                    {/* <input defaultValue={user.email} {...register("email")} /> */}
                    <input  {...register("username")} placeholder="Enter your name" />
                    <input type="text" {...register("address")} placeholder="Enter your Address" />
                    <input type="number" {...register("phone")} placeholder="Enter your phone number" />
                    <select {...register("gender")}>
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                   </select>                       
                                       
                    <input className="btn btn-primary mt-5" type="submit" />
                 </form>
                 </div>
                 <div className="card-container">                  
                 <Card style={{ width: '30rem' }}>
                    <Card.Img variant="top" src={service?.img} />
                    <Card.Body>
                        <Card.Title>{service?.name}</Card.Title>
                        <Card.Text>
                          {service?.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Price: ${service?.cost}</ListGroupItem>
                        <ListGroupItem>days: {service?.days}</ListGroupItem>
                        <ListGroupItem>
                            Group Size
                            30 People
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <h4>Included</h4>
                         <li>Specilaized Bilingual Guide</li>
                         <li> Private Transport</li>
                         <li> Entrance Fees</li>
                         <li>Box Lunch,Water,Dinner and Snacks</li>
                    </Card.Body>
                  </Card>
                 </div>
             </div>
        </div>
    );
};

export default PlaceOrder;