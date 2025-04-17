import React from 'react'
import { Link } from "react-router-dom";
function AdminDashboard() {
  return (
    <>
    <div className='container' style={{background: "white" , height: "100vh"}}>
    <div className=' pt-5' >
    <h1>Admin Dashboard</h1>
    <hr />   
    </div>

    <div className='functionality' style={{display:"flex", justifyContent:"space-around"}}>
    <button className="btn border btn-lg  book-btn" type="button" style={{backgroundColor: "#f37c20", color: "white", marginTop: "20px"}} ><Link to={"/admin/createpackage"} style={{color:"white"}} > Create Package</Link></button>
    <button className="btn border btn-lg  book-btn" type="button" style={{backgroundColor: "#f37c20", color: "white", marginTop: "20px"}} ><Link to={"/admin/viewpackage"} style={{color:"white"}} > View Package</Link></button>
    <button className="btn border btn-lg  book-btn" type="button" style={{backgroundColor: "#f37c20", color: "white", marginTop: "20px"}} ><Link to={"/admin/viewbookings"} style={{color:"white"}} > View Bookings</Link></button>
   
    </div>



    </div>
    
       
    </>
  )
}

export default AdminDashboard
