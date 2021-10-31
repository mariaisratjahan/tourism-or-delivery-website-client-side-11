import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../../../images/banner/five.jpg";
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-container">
           
           <div className="banner container d-md-flex ">
               <div className="banner-text ms-md-3">
                <h2 className="first">Nature Awaits</h2><br />
                <h2 className="second text-danger">Explore The World With Us!</h2>
               </div>           
                   <img className="me-md-3" src={img1} alt="" />              
           </div>
        </div>
    );
};

export default Banner;