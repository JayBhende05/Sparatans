import React from "react";
import Carousel from "../components/Carousel";
// import Booking from "../components/Booking";
import AboutUs from "../components/AboutUs"
import Explore from "../components/Explore";
import Services from "../components/Services";
// import Packages from "../components/Packages";
import Registration from "../components/Registration";


function Home (){
  return(
    <>
    
    <Carousel/>
    {/* <Booking/> */}
    <AboutUs/>
    <Explore/>
    <Services/>
    {/* <Packages/> */}
    <Registration/>
    
    </>
  )
}

export default Home