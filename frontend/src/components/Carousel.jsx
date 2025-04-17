import React from "react";
import img1 from "../assets/images/carousel/hero.jpg"
import img2 from "../assets/images/carousel/carousel-2.jpg"
import logo from "../assets/images/logo/spartan.png"
import {  useNavigate } from "react-router-dom";
function Carousel(){
  const navigate = useNavigate();
    return(
    <>
     <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={img1}alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            {/* <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4> */}
                            <img src={logo} alt="login form" className="img-fluid" style={{height: "200px"}}/>
                            <h1 className="display-3 text-white mb-md-4">Let's Discover The World Together</h1>
                            <span  className="btn btn-primary py-md-3 px-md-5 mt-2"  onClick={()=>{navigate('/tour-package') }}>Book Now</span>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={img2} alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3"  style={{maxWidth: "900px"}}>
                            <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                            <h1 className="display-3 text-white mb-md-4">Discover Amazing Places With Us</h1>
                            <span  className="btn btn-primary py-md-3 px-md-5 mt-2" onClick={()=>{navigate('/tour-package') }}>Book Now</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                <div className="btn btn-dark" style={{width: "45px" ,height: "45px"}}>
                    <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                <div className="btn btn-dark" style={{width: "45px" ,height: "45px"}}>
                    <span className="carousel-control-next-icon mb-n2"></span>
                </div>
            </a> */}
        </div>
    </div>
    </>
  )
}

export default Carousel