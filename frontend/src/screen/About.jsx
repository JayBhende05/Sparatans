import React from "react";
import AboutUs from "../components/AboutUs";
import Guides from "../components/Guides";
import Registration from "../components/Registration";
import Hero from "../components/Hero";


function About(){
  return(
<>
{/* <!-- Header Start --> */}
    
    {/* <!-- Header End --> */}
    <Hero page={"About"}/>
    <AboutUs/>
    {/* <Guides/> */}
    <Registration/>


</>
  )
}

export default About