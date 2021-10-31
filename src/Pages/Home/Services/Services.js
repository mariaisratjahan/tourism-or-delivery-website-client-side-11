import React, { useEffect, useState } from 'react';
import { ButtonGroup,Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useAuth from './../../../hooks/useAuth';



const Services = () => {
    const [services,setServices]=useState([]);
    const{user}=useAuth();
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data =>{
            setServices(data)
            console.log(data);
        })
        
    },[])
      const handleBookBtn=(index)=>{
      if(user?.email){
        const data=services[index];
        const email=user.email;
        data.email=email;
        console.log(data);
        fetch('http://localhost:5000/bookingService',{
            method:"POST",
            headers:{
             "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result);
        })
      }

    }
    return (
        <div id="services" className="mt-5">
            <h2 className="p-5">We Are <span className="text-danger">Offering</span></h2>
            <div >
            <Row xs={1} md={3} className="g-4">
              {
                  services.map((service,index)=><Col>
                <Card className="shadow">
                    <Card.Img variant="top" src={service?.img}/>
                    <Card.Body>
                    <Card.Title>{service?.name}</Card.Title>
                    <Card.Text style={{height:"13rem"}}>
                        {service?.description} 
                    </Card.Text>
                    <p className="bg-primary p-2 fs-5 text-white">${service?.cost}</p>
                     
                    <Link to={`/placeOrder/${service._id}`}>
                    <Button  variant="danger" size="lg">Book Now</Button>
                    </Link>
                    
                    </Card.Body>
                </Card>
            </Col>)
              } 
    
  
            </Row>

            </div>
        </div>
    );
};

export default Services;