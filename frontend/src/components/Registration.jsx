import React from "react";
import img2 from "../assets/images/carousel/carousel-2.jpg";

function Registration() {
  return (
    <>
      <div
        className="container-fluid bg-registration py-5"
        style={{ margin: "90px 0" }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Left Content Column */}
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="mb-4">
                <h6
                  className="text-primary text-uppercase"
                  style={{ letterSpacing: "5px" }}
                >
                  Summer Adventure
                </h6>
                <h1 className="text-white">
                  <span className="text-primary">30% OFF</span> Summer Getaways
                </h1>
              </div>
              <p className="text-white">
                Dive into summer with our hottest deals of the season! From
                tropical island hopping to mountain trekking, we've got the
                perfect adventure to fuel your wanderlust. Book now and
                experience sun-soaked destinations with our expert guides who
                know all the hidden gems and best local spots.
              </p>
              <ul className="list-inline text-white m-0">
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3"></i>Handpicked
                  summer adventure destinations
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3"></i>All-inclusive
                  packages with no hidden fees
                </li>
                <li className="py-2">
                  <i className="fa fa-check text-primary mr-3"></i>Local guides
                  with insider knowledge
                </li>
              </ul>
            </div>

            {/* Right Form Column */}
            <div className="col-lg-5">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-primary text-center p-4">
                  <h1 className="text-white m-0">Contact Now</h1>
                </div>
                <div className="card-body rounded-bottom bg-white p-4 p-md-5">
                  <form>
                    <div className="form-group mb-4">
                      <input
                        type="text"
                        className="form-control p-3 p-md-4"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="form-group mb-4">
                      <input
                        type="email"
                        className="form-control p-3 p-md-4"
                        placeholder="Your email"
                        required
                      />
                    </div>
                    <div className="form-group mb-4">
                      <textarea
                        className="form-control p-3 p-md-4"
                        placeholder="Your message"
                        rows="4"
                        required
                      ></textarea>
                    </div>
                    <div>
                      <button
                        className="btn btn-primary btn-block py-2 py-md-3"
                        type="submit"
                        style={{
                          fontSize: "1rem",
                          transition: "all 0.3s"
                        }}
                      >
                        Contact Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive CSS via style tag */}
      <style jsx>{`
        @media (max-width: 768px) {
          .bg-registration {
            margin: 40px 0 !important;
          }
          .card {
            margin-top: 2rem;
          }
          h1 {
            font-size: 1.8rem;
          }
          .text-uppercase {
            font-size: 0.9rem;
          }
        }
        @media (max-width: 576px) {
          .card-header h1 {
            font-size: 1.5rem;
          }
          .form-control {
            padding: 0.75rem !important;
          }
        }
      `}</style>
    </>
  );
}

export default Registration;