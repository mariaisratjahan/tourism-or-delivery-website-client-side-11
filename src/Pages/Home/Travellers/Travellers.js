import React from 'react';
import { Carousel } from 'react-bootstrap';

const Travellers = () => {
    return (
        <div className="py-5 my-5 ">
        <h2 className=" pb-4">Happy<span className=" text-danger">Travellers</span></h2>
        <div className=" d-md-flex px-5 pt-5 bg-info">
                <img width="300px" src="https://demo2.prestabrain.com/followme/wp-content/uploads/2021/06/h2_shape-3.png" alt="" />
                <div className="text-dark bg-light p-5 rounded-pill shadow-sm m-5" >
                    <h6 className="fw-bold">The planning process was excellent.</h6>
                    <hr />
                    <p className="fw-lighter fst-italic">"It was a life changing experience and we couldn't be happier to have done it, learned so much, seen so much, and escaped from work for a couple of weeks!" </p>
                </div>
            </div>
        </div>
    );
};

export default Travellers;