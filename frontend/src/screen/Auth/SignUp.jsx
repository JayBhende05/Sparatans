import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "./../../assets/images/logo/spartan-b.png"
import img from "../../assets/images/auth/signup.jpeg"
// import { set } from "mongoose";


function SignUp() {
  const navigate = useNavigate();
  const [signupData, setSignupData] = useState({
    name:'',email:'',password:''
  })
  
  // let [name, setName] = useState("");
  // let [email, setEmail] = useState("");
  // let [password, setPassword] = useState("");
  // const name = useRef(null)
  // let email = useRef('')
  // let password = useRef('')
  function handleSignupDataName(e){
    setSignupData({
      ...signupData,
      name: e.target.value
    })
    // console.log(signupData)
  }
  function handleSignupDataEmail(e){
    setSignupData({
      ...signupData,
      email: e.target.value
    })
    // console.log(signupData)
  }
  function handleSignupDataPassword(e){
    setSignupData({
      ...signupData,
      password: e.target.value
    })
    // console.log(signupData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupData)
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/register", {
       signupData
      });
      console.log(res)
      if (res.data.success) {
        // toast.success(res.data.message);
        console.log("Sign Up Data send Successfully ");
        navigate("/login");
      } else {
        // toast.error(res.data.error)
      }
    } catch (error) {
      console.log(error);
      // toast.error('Something went wrong')
      console.log("Sign Up Failed ", error);
    }
  };
  return (
    <>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={img}
                alt="login form" className="img-fluid"  style={{borderRadius: "1rem 0 0 1rem" }}/>
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                        <img src={logo} style={{margin: "auto"}} height="100px" alt="Logo"/>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Sign Up into your account
                        </h5>

                        <div data-mdb-input-init className="form-outline mb-4">
                          {/* <label className="form-label" for="form2Example17">Email address</label> */}
                          <input
                            type="name"
                            id="form2Example1"
                            onChange={handleSignupDataName}
                            value={signupData.name}
                            placeholder="Enter Username"
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          {/* <label className="form-label" for="form2Example17">Email address</label> */}
                          <input
                            type="email"
                            id="form2Example17"
                            onChange={handleSignupDataEmail}
                            placeholder="Enter Email Address"
                            className="form-control form-control-lg"
                          />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          {/* <label className="form-label" for="form2Example27">Password</label> */}
                          <input
                            type="password"
                            id="form2Example27"
                            onChange={handleSignupDataPassword}
                            placeholder="Enter Password"
                            className="form-control form-control-lg"
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn border btn-lg btn-block"
                            type="button"
                            style={{
                              backgroundColor: "#f37c20",
                              color: "white",
                            }}
                            onClick={handleSubmit}
                          >
                            Sign Up
                          </button>
                        </div>

                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81;" }}
                        >
                          Already have an account?{" "}
                          <span
                            style={{ color: "#393f81", cursor: "pointer" }}
                            onClick={() => {
                              navigate("/login");
                            }}
                          >
                            Login here
                          </span>
                        </p>
                        <a href="/" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="/" className="small text-muted">
                          Privacy policy
                        </a>
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
  );
}

export default SignUp;
