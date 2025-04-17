
import './App.css'
import React from "react"
import { Route, Routes } from "react-router-dom"
import Container from "./components/Container"
import Home from "./screen/Home"
import About from "./screen/About"
import Service from "./screen/Service"
import TourPackage from "./screen/TourPackage"
import Contact from "./screen/Contact"
import Login from "./screen/Auth/Login"
import SignUp from "./screen/Auth/SignUp"
import Booking from "./components/Booking"
// import Trail from "./screen/Trail"
import { Toaster } from "react-hot-toast"
import Order from "./components/Order"
import AdminDashboard from "./screen/Admin/AdminDashboard"
import CreatePackage from "./screen/Admin/CreatePackage"
import ViewPackages from "./screen/Admin/ViewPackages"
import ViewDetailPackage from "./screen/Admin/ViewDetailPackage"
import ViewBooking from "./screen/Admin/ViewBooking"



function App() {
  return (
    <>
    <Toaster/>
    
    <Container>
     <Routes>
     
      <Route element={<Home/>} path="/"/>
      <Route element={<About/>} path="/about"/>
      <Route element={<Service/>} path="/service"/>
      <Route element={<TourPackage/>} path="/tour-package"/>
      <Route element={<Contact/>} path="/contact"/>
      <Route element={<Login/>} path="/login"/>
      <Route element={<SignUp/>} path="/signup"/>
      <Route element={<Booking/>} path="/get-package/:slug"/>
      <Route element={<Order/>} path="/order"/> 
      
    </Routes>
    </Container>
   
    <Routes>
      {/* <Route element={<AdminLogin/>} path="/admin/login"/> */}
      <Route element={<AdminDashboard/>} path="/admin"/>
      <Route element={<CreatePackage/>} path="/admin/createpackage"/>
      <Route element={<ViewPackages/>} path="/admin/viewpackage"/>
      <Route element={<ViewDetailPackage/>} path="/getpackage/:slug"/>
      <Route element={<ViewBooking/>} path="/admin/viewbookings"/>


    </Routes>
    <Routes>
      <Route element={<ViewPackages/>} path="/trail"/>

      
    </Routes>
    
    
    </>
  )
}

export default App
