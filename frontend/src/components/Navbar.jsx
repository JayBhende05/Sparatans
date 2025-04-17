import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo/spartan-b.png";
import { useAuth } from "../context/auth";
import Order from "./Order";
import toast from "react-hot-toast";

function Navbar() {
  const data = [
    {
      tab: "Home",
      linkto: "/",
    },
  ];

  const [auth, setAuth] = useAuth();
  // console.log(auth.user.name);
  // const dd = localStorage.getItem("auth");
  // const user = JSON.parse(dd);
  // console.log(user)

  // const username = localStorage.getItem()
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");

    toast.success("Logout Succesfully");
  };
  console.log(auth);

  return (
    <>
      {/* TopBar */}
      {/* <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex align-items-center">
                        <p><i className="fa fa-envelope mr-2"></i>info@example.com</p>
                        <p className="text-body px-3">|</p>
                        <p><i className="fa fa-phone-alt mr-2"></i>+012 345 6789</p>
                    </div>
                </div>
                <div className="col-lg-6 text-center text-lg-right">
                    <div className="d-inline-flex align-items-center">
                        <a className="text-primary px-3" href="">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="text-primary px-3" href="">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a className="text-primary px-3" href="">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a className="text-primary px-3" href="">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a className="text-primary pl-3" href="">
                            <i className="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div> */}
      {/* Navbar */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div
          className="container-lg position-relative p-0 px-lg-3"
          style={{ zIndex: "9" }}
        >
          <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5">
            <a href="" className="navbar-brand">
              <Link to="/">
                <h1 className="m-0 text-primary">
                  <img src={logo} height="90px" />
                </h1>
              </Link>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between px-3"
              id="navbarCollapse"
            >
              <div className="navbar-nav ml-auto py-0">
                {auth.user ? (
                  <>
                    {auth.user.role === 0 ? (
                      <>
                        <Link to="/" className="nav-item nav-link  nav-op">
                          Home
                        </Link>
                        <Link to="/about" className="nav-item nav-link nav-op">
                          About
                        </Link>
                        <Link
                          to="/service"
                          className="nav-item nav-link nav-op"
                        >
                          Services
                        </Link>
                        <Link
                          to="/tour-package"
                          className="nav-item nav-link nav-op"
                        >
                          Tour Packages
                        </Link>
                        <Link
                          to="/contact"
                          className="nav-item nav-link nav-op"
                        >
                          Contact
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link to="/admin" className="nav-item nav-link  nav-op">
                          Home
                        </Link>
                        <Link
                          to="/admin/packages"
                          className="nav-item nav-link nav-op"
                        >
                          Package
                        </Link>
                        <Link
                          to="/admin/createpackage"
                          className="nav-item nav-link nav-op"
                        >
                          Create Package
                        </Link>
                        <Link
                          to="/admin/booking"
                          className="nav-item nav-link nav-op"
                        >
                          Booking
                        </Link>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <Link to="/" className="nav-item nav-link  nav-op">
                      Home
                    </Link>
                    <Link to="/about" className="nav-item nav-link nav-op">
                      About
                    </Link>
                    <Link to="/service" className="nav-item nav-link nav-op">
                      Services
                    </Link>
                    <Link
                      to="/tour-package"
                      className="nav-item nav-link nav-op"
                    >
                      Tour Packages
                    </Link>
                    <Link to="/contact" className="nav-item nav-link nav-op">
                      Contact
                    </Link>
                  </>
                )}

                {!auth.user ? (
                  <>
                    <Link to="/signup" className="nav-item nav-link nav-op ">
                      SignUp
                    </Link>
                    <Link to="/login" className="nav-item nav-link nav-op">
                      Login
                    </Link>
                  </>
                ) : (
                  <>
                    <div class="navdropdown">
                      <span>{`Hi  ${auth.user.name} `} &#x25BC;</span>
                      <div class="navdropdown-content">
                        {auth.user.role === 0 ? (
                          <>
                            {" "}
                            <Link
                              to="/order"
                              className="nav-item nav-link nav-op"
                            >
                              My Booking
                            </Link>
                            <Link
                              to="/login"
                              className="nav-item nav-link nav-op"
                              onClick={handleLogout}
                            >
                              Logout
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link
                              to="/login"
                              className="nav-item nav-link nav-op"
                              onClick={handleLogout}
                            >
                              Logout
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
