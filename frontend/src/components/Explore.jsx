import React from "react";
import { Link } from "react-router-dom";
// import rat from "../assets/images/booking/client/Harishchandragad.jpg"
import packages from "../PackagesData";


function Explore (){
    const explore = [{
        id: "1",
        destinationName: "Ratangad",
        activities: "20",
        img: "https://www.trawell.in/admin/images/upload/100451697Bhandardara_Ratangad_Main.jpg",

    },{
        id: "2",
        destinationName: "Kalu Waterfall",
        activities: "20",
        img: "https://vl-prod-static.b-cdn.net/system/images/000/711/704/10e740f412b0083f3dee853e32a85a9b/original/WhatsApp-Image-2023-07-03-at-5_18_08-PM-680x500__1_.jpeg?1722970950"
    },{
        id: "3",
        destinationName: "Andharban",
        activities: "20",
         img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/5d/7b/6b/spring.jpg?w=800&h=-1&s=1"
    },{
        id: "4",
        destinationName: "Harishchandragad",
        activities: "20",
         img: "https://harishchandragad.in/wp-content/uploads/2022/04/IMG_20220425_185021-1-scaled.jpg"
    }]
    
  return(
    <>
    <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Destination</h6>
                <h1>Explore Top Destination</h1>
            </div>
            <div className="row">
                {packages.map((items)=>{
                    return  (<>
                    <div key={items.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="destination-item position-relative overflow-hidden mb-2">
                        <img className="img-fluid" src={items.img} alt=""/>
                        <Link  to="/tour-package" className="destination-overlay text-white text-decoration-none" >
                            <h5 className="text-white">{items.destinationName}</h5>
                            <span>{items.activities}</span>
                        </Link>
                    </div>
                </div>
                    
                    </>)
                })}
             
            </div>
        </div>
    </div>
    </>
  )
}

export default Explore;