import React from 'react';
import './Footer.css';
import { FaPhoneAlt,FaEnvelopeSquare, FaLocationArrow } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-dark footer text-center mt-5">
          <h2 className="footer-heading text-danger">Tourify</h2>
          <div className="icons d-md-flex">
              <li><FaPhoneAlt/> <span>111-122-555</span></li>
              <li><FaEnvelopeSquare/><span>Tourify</span></li>
              <li><FaLocationArrow/><span>203, Envato Labs, Behind Alis Steet, Melbourne, Australia</span></li>
          </div>
          <small className="footer-para text-center">© 2021 <span className="text-danger px-2">RUNNER'S LIFE</span>.with all rights reserved</small>
        </div>
    );
};

export default Footer;