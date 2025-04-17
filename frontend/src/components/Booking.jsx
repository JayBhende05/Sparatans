import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/auth";
import Loader from "./Loader";
import Pay from "./Pay";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51O2PaUSA6nkwsRXSU6o05iAY2c4xoFhXA5cmPHqd0JwGCKa8l3iqyIYIz0ye3QLa0s9B2EO1rMFYZNhqru8A7Zth00hK8we9ac"
);

function Booking() {
  const [clientToken, setClientToken] = useState("");
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const [pack, setPack] = useState({});
  const [bookingOn, setBookingOn] = useState("");
  const [auth] = useAuth();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (params?.slug) {
      getPackage();
    }
  }, [params?.slug]);

  const getPackage = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8000/api/v1/package/get-package/${params.slug}`
      );
      setPack(data?.pack || {});
      setLoading(false);
    } catch (error) {
      console.error("Error fetching package:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const bookingData = {
    package: pack._id,
    user: auth?.user || null,
    bookingOn: bookingOn,
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {pack.image2 ? (
        <div className="container-fluid py-5">
          <div className="container pt-5 text-center">
            <h6
              className="text-primary text-uppercase"
              style={{ letterSpacing: "5px" }}
            >
              Destination
            </h6>
            <h1>{pack.destinationName}</h1>
          </div>

          <section className="booking-section">
            <div className="header-section container">
              <h1>{pack.activity}</h1>
              <img
                style={{ marginTop: "30px", width: "100%" }}
                src={`http://localhost:8000/api/v1/package/package-photo/${pack._id}`}
                alt="Destination"
              />
            </div>

            <div className="detail-section">
              <h3>Overview</h3>
              <p>{pack.description}</p>
            </div>

            <h3>Activities</h3>
            <div className="activity-section flex row">
              <img
                src={`http://localhost:8000/api/v1/package/package-photoone/${pack._id}`}
                style={{ width: "48%", margin: "2px" }}
                alt="Activity 1"
              />
              <img
                src={`http://localhost:8000/api/v1/package/package-phototwo/${pack._id}`}
                style={{ width: "48%", margin: "2px" }}
                alt="Activity 2"
              />
            </div>

            <div className="container-fluid booking mt-5 pb-5">
              <div className="container pb-5">
                <div className="bg-light shadow" style={{ padding: "30px" }}>
                  <div
                    className="row align-items-center"
                    style={{ minHeight: "60px" }}
                  >
                    <div className="col-md-10">
                      <div className="row">
                        <div className="col-md-3">
                          <button
                            className="btn btn-primary btn-block"
                            style={{ height: "47px", marginTop: "-2px" }}
                          >
                            Select Booking Date
                          </button>
                        </div>
                        <div className="col-md-3">
                          <select
                            className="custom-select px-4"
                            value={bookingOn} // This ensures controlled component behavior
                            style={{ height: "47px" }}
                            onChange={(e) => {
                              // console.log("Selected Date:", e.target.value); // Debugging output
                              setBookingOn(e.target.value);
                            }}
                          >
                            <option value="">Select Date</option>
                            <option value="19th April 2025">
                              19th April 2025
                            </option>
                            <option value="19th April 2025">
                            19th April 2025
                            </option>
                            <option value="19th April 2025">
                            19th April 2025
                            </option>
                          </select>
                        </div>
                        <div className="col-md-3">
                          <button
                            className="btn btn-primary btn-block"
                            style={{ height: "47px", marginTop: "-2px" }}
                          >
                            Select No. of Persons
                          </button>
                        </div>
                        <div className="col-md-3">
                          <select
                            className="custom-select px-4"
                            style={{ height: "47px" }}
                          >
                            <option>Number of persons</option>
                            <option value="1">1</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <button
                        className="btn btn-primary btn-block"
                        style={{ height: "47px", marginTop: "-2px" }}
                      >
                        ₹ {pack.price || "N/A"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {show && <Pay data={bookingData} />}
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default Booking;
