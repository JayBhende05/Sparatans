import React, { useState } from "react";
import axios from "axios";
import logo from "../../assets/images/logo/spartan-b.png";

function CreatePackage() {
  const [destinationName, setDestinationName] = useState("");
  const [activity, setActivity] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [price, setPrice] = useState("");
  console.log("Photo is :", image);


  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("destinationName", destinationName);
      productData.append("description", description);
      productData.append("activity", activity);
      productData.append("price", price);
      productData.append("image", image);
      productData.append("image1", image1);
      productData.append("image2", image2);
      console.log("product data",productData)
      for (let [key, value] of productData) {
        console.log(`${key}: ${value}`)
      }
      
      const { data } =await axios.post(
        "http://localhost:8000/api/v1/admin/createpackage",
        productData
      );
      console.log("in data",data)
      if (data?.success) {
        // toast.error(data?.message);
      } else {
        // toast.success("Product Created Successfully");
        // navigate("/dashboard/admin/get-product");
      }
    } catch (error) {
      // console.log(error);
      // toast.error("Something Went Wrong");
    }
  };

  return (
    <>
      

      <section className="vh-100" style={{ backgroundColor: "white" , height:"100%"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  {/* <div className="col-md-6 col-lg-5 d-none d-md-block"> */}
                  {/* <img src={img}
                alt="login form" className="img-fluid"  style={{}}/> */}
                  {/* </div> */}
                  <div
                    className="col-md-6 col-lg-9 d-flex align-items-center"
                    style={{ margin: "0px auto" }}
                  >
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <img
                            src={logo}
                            style={{ margin: "auto" }}
                            height="100px"
                          />
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Create a Package
                        </h5>

                        <div
                          className="form-outline mb-2"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          {/* <label className="form-label" for="form2Example17">Email address</label> */}
                          <p
                            className=" "
                            style={{
                              color: "#393f81",
                              width: "230px",
                              padding: " 12px 5px",
                            }}
                          >
                            Destination Name
                          </p>
                          <input
                            type="text"
                            id="form2Examle17"
                            placeholder="Enter Destination"
                            value={destinationName}
                            onChange={(e)=>{setDestinationName(e.target.value)}}
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div
                          className="form-outline mb-2"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          {/* <label className="form-label" for="form2Example17">Email address</label> */}
                          <p
                            className=" "
                            style={{
                              color: "#393f81",
                              width: "230px",
                              padding: " 12px 5px",
                            }}
                          >
                            Activity
                          </p>
                          <input
                            type="text"
                            id=""
                            placeholder="Enter Activity"
                            className="form-control form-control-lg"
                            value={activity}
                            onChange={(e) => setActivity(e.target.value)}
                          />
                        </div>
                        <div
                          className="form-outline mb-2"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          {/* <label className="form-label" for="form2Example17">Email address</label> */}
                          <p
                            className=" "
                            style={{
                              color: "#393f81",
                              width: "230px",
                              padding: " 12px 5px",
                            }}
                          >
                            Price
                          </p>
                          <input
                            type="textarea"
                            id=""
                            placeholder="Enter Description"
                            value={price}
                            className="form-control form-control-lg"
                            onChange={(e) => setPrice(e.target.value)}
                          />
                        </div>
                        <div
                          className="form-outline mb-2"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          {/* <label className="form-label" for="form2Example17">Email address</label> */}
                          <p
                            className=" "
                            style={{
                              color: "#393f81",
                              width: "230px",
                              padding: " 12px 5px",
                            }}
                          >
                            Decription
                          </p>
                          <input
                            type="textarea"
                            id=""
                            placeholder="Enter Description"
                            value={description}
                            className="form-control form-control-lg"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>

                        <div
                          className="form-outline mb-2"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          {/* <label className="form-label" for="form2Example17">Email address</label> */}
                          <p
                            className=" "
                            style={{
                              color: "#393f81",
                              width: "230px",
                              padding: " 6px 5px",
                            }}
                          >
                            Upload Destination Image
                          </p>
                          <input
                            type="file"
                            id="form2Eple17"
                            name="photo"
                            accept="image/*"
                            onChange={(e) => setImage(e.target.files[0])}
                            placeholder="Image"
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div
                          className="form-outline mb-2"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          {/* <label className="form-label" for="form2Example17">Email address</label> */}
                          <p
                            className=" "
                            style={{
                              color: "#393f81",
                              width: "230px",
                              padding: " 6px 5px",
                            }}
                          >
                            Upload Activity Image
                          </p>
                          <input
                            type="file"
                            id="fom2Examle17"
                            name="photo"
                            accept="image/*"
                            onChange={(e) => setImage1(e.target.files[0])}
                            placeholder="Image1"
                            className="form-control form-control-lg"
                          />
                        </div>
                        <div
                          className="form-outline mb-2"
                          style={{ display: "flex", flexDirection: "row" }}
                        >
                          {/* <label className="form-label" for="form2Example17">Email address</label> */}
                          <p
                            className=" "
                            style={{
                              color: "#393f81",
                              width: "230px",
                              padding: " 6px 5px",
                            }}
                          >
                            Upload Detail Image
                          </p>
                          <input
                            type="file"
                            id="form2Example7"
                            name="photo"
                            accept="image/*"
                            onChange={(e) => setImage2(e.target.files[0])}
                            placeholder="Enter Image2"
                            className="form-control form-control-lg"
                          />
                        </div>



                        <div className="pt-1 mb-4">
                          <button type="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn border btn-lg btn-block"
                            onClick={handleCreate}
                            style={{
                              backgroundColor: "#f37c20",
                              color: "white",
                            }}
                          >
                           Add 
                          </button>
                        </div>

                        {/* <a className="small text-muted" href="/">Forgot password?</a> */}
                        
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

export default CreatePackage;
