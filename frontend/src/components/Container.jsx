import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useAuth } from '../context/auth'
function Container(props) {
  const [auth] = useAuth();
  return (
    <>
    
    <Navbar/>
    {
      props.children
    }
    {auth.user ? (<> {auth.user.role === 1 ? (<></>): (<><Footer/></>)} </>):(<><Footer/></>)} 
      
    </>
  )
}

export default Container
