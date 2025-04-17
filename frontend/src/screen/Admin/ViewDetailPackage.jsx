import React, {useState, useEffect} from "react";
import axios from "axios"
// import toast from "react-hot-toast"
// import packages from "../PackagesData";
// import img1 from "../assets/images/booking/Ratangad.jpg";
// import img2 from "../assets/images/booking/Ratangad1.jpg";
// import img21 from "../assets/images/booking/Ratangad2.jpg";
import {  useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
// import { useAuth } from "../../context/auth";
import Loader from "..//../components/Loader";

function Booking() {

  // const params = useParams();

  // let data = params ? packages.filter((items)=> items.id == params.id) : ""
  // console.log(data)
  const params = useParams();
  // console.log(params.id);
    // const navigate = useNavigate();
    const [pack, setPack] = useState({});
    const[bookingOn,setbookingOn] = useState('');
    // const[pickupStop,setbookingOn] = useState('');
    // const [auth, setAuth] = useAuth();
     const navigate = useNavigate();


    //initalp details
    useEffect(() => {
      if (params?.slug) getPackage();
      // eslint-disable-next-line
    }, [params?.slug]);
    //getProduct

    // console.log(params.slug)
    const getPackage = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:8000/api/v1/package/get-package/${params.slug}`
        );
        // console.log(data)
        setPack(data?.pack);
   
      } catch (error) {
        console.log(error);
      }
    };

    // const xyz = { 
    //   product : pack._id,
    //   user : auth.user,
    //   bookingOn : bookingOn

    // } 
    // bookingOn: bookingOn,
    // console.log(xyz)
    // const handleBooking = async ()=>{
    
    //     try {
    
    //      console.log(xyz)
    //       // eslint-disable-next-line
    //       const { data } = await axios.post("http://localhost:8000/api/v1/package/booking", {
    //         xyz
    //       });
    //       // console.log(data)
    //       // localStorage.removeItem("cart");
    //       // setCart([]);
    //       // navigate("/dashboard/user/orders");
    //       console.log("Data send fron FRontensd is : ", data)
    //       toast.success("Payment Completed Successfully ");
          
    //     } catch (error) {
    //       console.log(error);
    
    //     }
    // }
  
  // console.log("State data is : ",pack)
  
  return (
    <>

    {pack.image2 ?( <>
      <div className="container-fluid py-5">
        <div className="container pt-5 ">
          <div className="text-center mb-3">
            <h6
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Destination
            </h6>
            <h1>{pack.destinationName}</h1>
          </div>
        </div>
      </div>

      <section className="booking-section">
        <div className="header-section container">
          <div>
            <h1>{pack.activity} </h1>
            <img style={{ marginTop: "30px", width: "100%" }} src={`http://localhost:8000/api/v1/package/package-photo/${pack._id}`} alt="See" />
          </div>
          <div></div>
        </div>
        <div className="detail-section">
          <h3>Overview</h3>
          <p>{pack.description}</p>
        </div>
        <h3>Activities</h3>
        <div className="activity-section flex row">

          
          <img
            src={`http://localhost:8000/api/v1/package/package-photoone/${pack._id}`}
            style={{ width: "48%", margin: "2px" }} alt="See"
          />
          <img
            src={`http://localhost:8000/api/v1/package/package-phototwo/${pack._id}`}
            style={{ width: "48%", margin: "2px" }}  alt="See"
          />
        </div>
        <div className="container-fluid booking mt-5 pb-5">
        <div className="container pb-5">
            <div className="bg-light shadow" style={{padding: "30px"}}>
                <div className="row align-items-center" style={{minHeight: "60px"}}>
                    <div className="col-md-10">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                    
                                    <div className="date" id="date1" data-target-input="nearest">
                                    <button className="btn btn-primary btn-block"  style={{height: "47px", marginTop: "-2px"}}>Select Booking Date </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="mb-3 mb-md-0">
                                <select className="custom-select px-4" value={bookingOn} style={{height: "47px"}} onChange={e =>{setbookingOn(e.target.value)}}>
                                        <option>View Date</option>
                                        <option value="2nd December 2024">2nd February 2025</option>
                                        <option value="4nd December 2024">4th February 2025</option>
                                        <option value="6th December 2024">6th February 2025</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="col-md-3">
                                      
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-2">
                    
                        <button className="btn btn-primary btn-block" type="submit" style={{height: "47px", marginTop: "-2px"}}>₹ {pack.price}</button>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    <button  className="btn border btn-lg btn-block book-btn" type="button" onClick={()=>{navigate(`/admin/viewpackage`)}} style={{backgroundColor: "#f37c20", color: "white", marginTop: "20px"}} >Go Back</button>
      </section>
      
      </>
    ) : (<> <Loader/></>) }
    
      
    </>
  );
}

export default Booking;
