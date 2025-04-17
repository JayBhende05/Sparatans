import React, { useState, useEffect } from "react";
import NoBooking from "./NoBooking";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

function Order() {
  const val = "true";
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  let flag = "false";

  const getOrders = async () => {
    try {
      const email = auth.user.email;
      console.log("Auth being send is : ", email);
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/package/order",
        { email }
      );
      console.log(data.orders);
      setOrders(data.neworders);
      flag = "true";

      // console.log("req",data.orders);
      // console.log("req",orders[0]._id);
      console.log("state", orders);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };
  //lifecycle method
  useEffect(() => {
    getOrders();
  }, []);
  // console.log("Ne Ordrs Data" , orders[0]._id);
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Extract day, month, and year
    const day = date.getUTCDate();
    const month = date.toLocaleString("en-US", { month: "long" }); // Full month name
    const year = date.getUTCFullYear();

    // Add ordinal suffix to the day
    const ordinalSuffix = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    return `${ordinalSuffix(day)} ${month} ${year}`;
  };

  const handleBookingCancel = async (e) => {
    const orderId = e.target.value;
    // const orderId = "674d67400e930e9d402aaf80";

    console.log("CLicked")
    const data = await axios.delete(`http://localhost:8000/api/v1/package/order/${orderId}`)
    console.log(data);
    toast.success("Booking Cancelled Successfully")
    getOrders();


  };

  // const navigate = useNavigate();
  return (
    <>
      {orders.map((items) => {
        return (
          <>
            <div className="container-fluid-order my-5 d-sm-flex justify-content-center">
              <div className="card px-2">
                <div className="card-header bg-white">
                  <div className="row justify-content-between">
                    <div className="col">
                      <p className="text-muted">
                        Order ID{" "}
                        <span className="font-weight-bold text-dark">
                          {items._id}
                        </span>
                      </p>
                      <p className="text-muted">
                        {" "}
                        Place On{" "}
                        <span className="font-weight-bold text-dark">
                          {formatDate(items.bookingDate)}
                        </span>{" "}
                      </p>
                    </div>
                    <div className="flex-col my-auto">
                      <h6 className="ml-auto mr-3">
                        <a href="#">View Details</a>
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="media flex-column flex-sm-row">
                    <div className="media-body ">
                      <h5 className="bold">{items.product.activity}</h5>
                      <h6 className="">
                        Palce - {items.product.destinationName}
                      </h6>
                      <p className="text-muted"> NOP: 1 </p>
                      <h4 className="mt-3 mb-4 bold">
                        {" "}
                        <span className="mt-5">&#x20B9;</span> 1,500{" "}
                        <span className="small text-muted"> via (COD) </span>
                      </h4>
                      <p className="text-muted">
                        Booking on: <span className="Today"></span>
                      </p>
                      <button
                        type="button"
                        className="btn  btn-outline-primary d-flex"
                      >
                        {items.bookingOn}
                      </button>
                    </div>
                    <img
                      className="align-self-center img-fluid"
                      src={`http://localhost:8000/api/v1/package/package-photo/${items.product._id}`}
                      width="180 "
                      height="180"
                    />
                  </div>
                </div>
                {/* <div className="row px-3">
              <div className="col">
                <ul id="progressbar">
                  <li className="step0 active " id="step1">
                    PLACED
                  </li>
                  <li className="step0 active text-center" id="step2">
                    SHIPPED
                  </li>
                  <li className="step0  text-muted text-right" id="step3">
                    DELIVERED
                  </li>
                </ul>
              </div>
            </div> */}
                <div className="card-footer  bg-white px-sm-3 pt-sm-4 px-0">
                  <div className="row text-center  ">
                    <div className="col  my-auto   border-line ">
                      {/* <h5>Cancel Booking</h5> */}
                      <button
                       value={items._id}
                        style={{
                          borderRadius: "15px",
                          border: "1px solid white",
                          background: "#f37c20",
                          color: "white",
                          padding: "8px",
                        }}
                        onClick={handleBookingCancel}
                      >
                        Cancel Booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Order;
