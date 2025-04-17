import React from "react";
import img1 from "../assets/images/about/about.jpeg"
import img2 from "../assets/images/about/about-1.jpg"
import img3 from "../assets/images/about/about-2.jpg"

function AboutUs(){
  return(
    <>
    
      <div className="container-fluid py-5">
        <div className="container pt-5">
            <div className="row">
                <div className="col-lg-6" style={{minHeight: "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src={img1} style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-6 pt-5 pb-lg-5">
                    <div className="about-text bg-white p-4 p-lg-5 my-lg-5">
                        <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>About Us</h6>
                        <h1 className="mb-3">We Provide Best Tour Packages In Your Budget</h1>
                        <p>Whether you're seeking a thrilling mountain trek, a serene beach escape, or an action-packed weekend getaway, we offer flexible packages designed to meet your financial needs without compromising on quality. </p>
                        <div className="row mb-4">
                            <div className="col-6">
                                <img className="img-fluid" src={img2} alt=""/>
                            </div>
                            <div className="col-6">
                                <img className="img-fluid" src={img3} alt=""/>
                            </div>
                        </div>
                        <a href="" className="btn btn-primary mt-1">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default AboutUs