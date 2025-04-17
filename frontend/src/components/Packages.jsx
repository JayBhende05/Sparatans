import React, { useState, useEffect } from "react";
import axios from 'axios'
import toast from "react-hot-toast";
// import packages from "../PackagesData";
// import img1 from "../assets/images/packages/package-1.jpg"
// import img2 from "../assets/images/packages/package-2.jpg"
// import img3 from "../assets/images/packages/package-3.jpg"
// import img4 from "../assets/images/packages/package-4.jpg"
// import img5 from "../assets/images/packages/package-5.jpg"
// import img6 from "../assets/images/packages/package-6.jpg"
import { Link, useNavigate } from "react-router-dom";
import Loader from "./Loader";



function Packages(){

    const[packages, setPackages] = useState([])
    // const packagess = [
    //     {
    //         id: "01",
    //         destinationName: "Ratangad",
    //         activities: "20",
    //         description: "Discover Scenic Beauty and historical significance",
    //         duration: "1",
    //         price: "1500",
    //         rating: "4.3",
    //         img: "https://www.trawell.in/admin/images/upload/100451697Bhandardara_Ratangad_Main.jpg",

    //     },{
    //         id: "02",
    //         destinationName: "Kalu Waterfall",
    //         activities: "20",
    //         description: "",
    //         duration: "1",
    //         price: "2500",
    //         rating: "4.3",
    //         img: "https://www.treksandtrails.org/system/images/000/609/665/4d744758b9558113f617bfd039e69b66/x1000gt/Kalu-waterfall-2.jpg?1658796770"
    //     },{
    //         id: "03",
    //         destinationName: "Andharban",
    //         activities: "20",
    //         description: "",
    //         duration: "1",
    //         price: "5500",
    //         rating: "4.3",
    //          img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/5d/7b/6b/spring.jpg?w=800&h=-1&s=1"
    //     },{
    //         id: "04",
    //         destinationName: "Harishchandragad",
    //         activities: "20",
    //         description: "",
    //         duration: "1",
    //         price: "1500",
    //         rating: "4.3",
    //          img: "https://vl-prod-static.b-cdn.net/system/images/000/711/704/10e740f412b0083f3dee853e32a85a9b/original/WhatsApp-Image-2023-07-03-at-5_18_08-PM-680x500__1_.jpeg?1722970950"
    //     }
    // ]
     //getall products
     const getAllPackages = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/api/v1/package/getpackages");
            setPackages(data.packages);
          

            
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
    };
    //lifecycle method
    useEffect(() => {
        getAllPackages();
    }, []);

    const navigate = useNavigate();
    
  return(
    <>
   
    {packages.length > 0 ?(
        <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-3 pb-3">
                <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Packages</h6>
                <h1>Pefect Tour Packages</h1>
            </div>
            <div className="row">
                {packages.map((items)=>{
                    return(
                        <>
                        <div key={items.id} className="col-lg-4 col-md-6 mb-4">
                    <div className="package-item bg-white mb-2">
                        <img className="img-fluid" src={`http://localhost:8000/api/v1/package/package-photo/${items._id}`} alt=""/>
                        <div className="p-4">
                            <div className="d-flex justify-content-between mb-3">
                                <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>{items.destinationName}</small>
                                <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>{items.duration} days</small>
                                <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>1 Person</small>
                            </div>
                            <a className="h5 text-decoration-none" href="">{items.description.slice(0,80)}...</a>
                            <div className="border-top mt-4 pt-4">
                                <div className="d-flex justify-content-between">
                                    <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>{items.rating}<small>(250)</small></h6>
                                    <h5 className="m-0">₹{items.price}</h5>
                                </div>
                            </div>
                            <button  className="btn border btn-lg btn-block book-btn" type="button" onClick={()=>{navigate(`/get-package/${items.slug}`)}} style={{backgroundColor: "#f37c20", color: "white", marginTop: "20px"}} >Book Now</button>
                            
                        </div>
                    </div>
                </div>
                        </>
                    )
                })}
            </div>
        </div>
    </div>):(<Loader/>)}
    </>
  )
}

export default Packages

// {packages ? ( <div className="container-fluid py-5">
//     <div className="container pt-5 pb-3">
//         <div className="text-center mb-3 pb-3">
//             <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}>Packages</h6>
//             <h1>Pefect Tour Packages</h1>
//         </div>
//         <div className="row">
//             {packages.map((items)=>{
//                 return(
//                     <>
                    
//                     <div key={items.id} className="col-lg-4 col-md-6 mb-4">
//                 <div className="package-item bg-white mb-2">
//                     <img className="img-fluid" src={`http://localhost:8000/api/v1/package/package-photo/${items.id}`} alt=""/>
//                     <div className="p-4">
//                         <div className="d-flex justify-content-between mb-3">
//                             <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>{items.destinationName}</small>
//                             <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>{items.duration} days</small>
//                             <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>1 Person</small>
//                         </div>
//                         <a className="h5 text-decoration-none" href="">{items.description.slice(0,80)}...</a>
//                         <div className="border-top mt-4 pt-4">
//                             <div className="d-flex justify-content-between">
//                                 <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>{items.rating}<small>(250)</small></h6>
//                                 <h5 className="m-0">₹{items.price}</h5>
//                             </div>
//                         </div>
//                         <button  className="btn border btn-lg btn-block book-btn" type="button" onClick={()=>{navigate(`/booking/${items.id}`)}} style={{backgroundColor: "#f37c20", color: "white", marginTop: "20px"}} >Book Now</button>
//                     </div>
//                 </div>
//             </div>
//                     </>
//                 )
//             })}
            

//             {/* <div className="col-lg-4 col-md-6 mb-4">
//                 <div className="package-item bg-white mb-2">
//                     <img className="img-fluid" src={img2}alt=""/>
//                     <div className="p-4">
//                         <div className="d-flex justify-content-between mb-3">
//                             <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
//                             <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
//                             <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
//                         </div>
//                         <a className="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
//                         <div className="border-top mt-4 pt-4">
//                             <div className="d-flex justify-content-between">
//                                 <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
//                                 <h5 className="m-0">₹350</h5>
//                             </div>
//                         </div>
//                         <button className="btn border btn-lg btn-block" type="button" style={{backgroundColor: "#f37c20", color: "white", marginTop: "20px"}} >Book Now</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="col-lg-4 col-md-6 mb-4">
//                 <div className="package-item bg-white mb-2">
//                     <img className="img-fluid" src={img3}alt=""/>
//                     <div className="p-4">
//                         <div className="d-flex justify-content-between mb-3">
//                             <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
//                             <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
//                             <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
//                         </div>
//                         <a className="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
//                         <div className="border-top mt-4 pt-4">
//                             <div className="d-flex justify-content-between">
//                                 <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
//                                 <h5 className="m-0">₹350</h5>
//                             </div>
//                         </div>
//                         <button className="btn border btn-lg btn-block" type="button" style={{backgroundColor: "#f37c20", color: "white", marginTop: "20px"}} >Book Now</button>
//                     </div>
//                 </div>
//             </div>


//             <div className="col-lg-4 col-md-6 mb-4">
//                 <div className="package-item bg-white mb-2">
//                     <img className="img-fluid" src={img4}alt=""/>
//                     <div className="p-4">
//                         <div className="d-flex justify-content-between mb-3">
//                             <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
//                             <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
//                             <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
//                         </div>
//                         <a className="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
//                         <div className="border-top mt-4 pt-4">
//                             <div className="d-flex justify-content-between">
//                                 <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
//                                 <h5 className="m-0">₹350</h5>
//                             </div>
//                         </div>
//                         <button className="btn border btn-lg btn-block" type="button" style={{backgroundColor: "#f37c20", color: "white", marginTop: "20px"}} >Book Now</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="col-lg-4 col-md-6 mb-4">
//                 <div className="package-item bg-white mb-2">
//                     <img className="img-fluid" src={img5}alt=""/>
//                     <div className="p-4">
//                         <div className="d-flex justify-content-between mb-3">
//                             <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
//                             <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
//                             <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
//                         </div>
//                         <a className="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
//                         <div className="border-top mt-4 pt-4">
//                             <div className="d-flex justify-content-between">
//                                 <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
//                                 <h5 className="m-0">₹350</h5>
//                             </div>
//                         </div>
//                         <button className="btn border btn-lg btn-block" type="button" style={{backgroundColor: "#f37c20", color: "white", marginTop: "20px"}} >Book Now</button>
//                     </div>
//                 </div>
//             </div>

//             <div className="col-lg-4 col-md-6 mb-4">
//                 <div className="package-item bg-white mb-2">
//                     <img className="img-fluid" src={img6}alt=""/>
//                     <div className="p-4">
//                         <div className="d-flex justify-content-between mb-3">
//                             <small className="m-0"><i className="fa fa-map-marker-alt text-primary mr-2"></i>Thailand</small>
//                             <small className="m-0"><i className="fa fa-calendar-alt text-primary mr-2"></i>3 days</small>
//                             <small className="m-0"><i className="fa fa-user text-primary mr-2"></i>2 Person</small>
//                         </div>
//                         <a className="h5 text-decoration-none" href="">Discover amazing places of the world with us</a>
//                         <div className="border-top mt-4 pt-4">
//                             <div className="d-flex justify-content-between">
//                                 <h6 className="m-0"><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
//                                 <h5 className="m-0">₹350</h5>
//                             </div>
//                         </div>
//                         <button className="btn border btn-lg btn-block" type="button" style={{backgroundColor: "#f37c20", color: "white", marginTop: "20px"}} >Book Now</button>
//                     </div>
//                 </div>
//             </div> */}
//         </div>
//     </div>
// </div>) : (<Loader/>)}