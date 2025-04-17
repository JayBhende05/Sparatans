import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "./../../assets/images/logo/spartan-b.png"
import img from "../../assets/images/auth/signup.jpeg"
import axios from "axios"
import {useAuth} from '../../context/auth' 
import toast from 'react-hot-toast'


function Login() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email:'',password:''
  })
  const [auth,setAuth] = useAuth();

  
   //login function on submit
   const handleSubmit = async (e) =>{
    console.log(loginData)
    e.preventDefault()
    try {
    const res = await axios.post('http://localhost:8000/api/v1/auth/login',{loginData});
    if(res.data.success){
        toast.success(res.data && res.data.message);
        //for notification
        //to get the user data as respond and pass it to context API
        setAuth({
            ...auth,
            user: res.data.user,
            token: res.data.token
        })
        localStorage.setItem('auth',JSON.stringify(res.data))//saving th user data in user local storage to avoid loss of data on reload
        console.log(res.data)
        if(res.data.user.role === 1 ){ navigate( Location.state ||'/admin');}else{navigate(Location.state ||'/')}
     
    }else{
        toast.error(res.data.message);
    }
    
  } catch (error) {
    console.log(error)
    toast.error('Something went wrong')
    
  }

}

function handleLoginDataEmail(e){
  setLoginData({
    ...loginData,
    email: e.target.value
  })
  console.log(loginData)
}
function handleLoginDataPassword(e){
  setLoginData({
    ...loginData,
    password: e.target.value
  })
  
  console.log(loginData)
}

  
  return (
    <>
    <section className="vh-100" style={{backgroundColor: ""}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src={img}
                alt="login form" className="img-fluid"  style={{}}/>
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                   <img src={logo} style={{margin: "auto"}} height="100px" alt="Logo"/>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: "1px"}}>Login into your account</h5>

                  <div data-mdb-input-init className="form-outline mb-4">
                    {/* <label className="form-label" for="form2Example17">Email address</label> */}
                    <input type="email" id="form2Example17" placeholder='Enter your Email' className="form-control form-control-lg"  onChange={handleLoginDataEmail} />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    {/* <label className="form-label" for="form2Example27">Password</label> */}
                    <input type="password" id="form2Example27" placeholder='Enter your Password' className="form-control form-control-lg" onChange={handleLoginDataPassword} />
                  </div>

                  <div className="pt-1 mb-4">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn border btn-lg btn-block" type="button" style={{backgroundColor: "#f37c20", color: "white"}} onClick={handleSubmit} >Login</button>
                  </div>

                  {/* <a className="small text-muted" href="/">Forgot password?</a> */}
                  <p className="mb-5 pb-lg-2" style={{color: "#393f81;"}}>Don't have an account? <span
                      style={{color: "#393f81", cursor: "pointer"}} onClick={()=>{navigate('/signup')}}>Register here</span></p>
                  <a href="/" className="small text-muted">Terms of use.</a>
                  <a href="/" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </>
  )
}

export default Login
