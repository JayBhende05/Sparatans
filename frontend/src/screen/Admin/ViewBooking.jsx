import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ReceiptButton from "./../../components/ReceiptButton"; 

function ViewBooking() {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState([]);
  const [filterDate, setFilterDate] = useState("");

  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/v1/admin/getallbookings"
      );
      setBookings(data.bookings);
      setFilteredBookings(data.bookings);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  useEffect(() => {
    if (!filterDate) {
      setFilteredBookings(bookings);
      return;
    }
    
    const filtered = bookings.filter(booking => 
      new Date(booking.bookingDate).toLocaleDateString() === new Date(filterDate).toLocaleDateString()
    );
    setFilteredBookings(filtered);
  }, [filterDate, bookings]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const year = date.getUTCFullYear();

    const ordinalSuffix = (n) => {
      const s = ["th", "st", "nd", "rd"];
      const v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    };

    return `${ordinalSuffix(day)} ${month} ${year}`;
  };

  const handleBookingCancel = async (e) => {
    const orderId = e.target.value;
    try {
      await axios.delete(
        `http://localhost:8000/api/v1/admin/cancelBooking/${orderId}`
      );
      toast.success("Booking Cancelled Successfully");
      getOrders();
    } catch (error) {
      toast.error("Failed to cancel booking");
      console.error(error);
    }
  };

  const handleDateChange = (e) => {
    setFilterDate(e.target.value);
  };

  const resetFilter = () => {
    setFilterDate("");
  };

  return (
    <div className="container my-5">
      {/* Filter Section */}
      <div className="card mb-4 p-3">
        <h4>Filter by Booking Date</h4>
        <div className="row">
          <div className="col-md-4 mb-2">
            <label htmlFor="date" className="form-label">Select Date</label>
            <input 
              type="date" 
              className="form-control" 
              id="date" 
              name="date"
              value={filterDate}
              onChange={handleDateChange}
            />
          </div>
          <div className="col-md-2 d-flex align-items-end mb-2">
            <button 
              className="btn btn-secondary w-100"
              onClick={resetFilter}
              disabled={!filterDate}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Bookings List */}
      {filteredBookings.length === 0 ? (
        <div className="alert alert-info">
          {filterDate ? "No bookings found for the selected date" : "No bookings available"}
        </div>
      ) : (
        filteredBookings.map((items) => (
          <div key={items._id} className="card mb-4">
            <div className="card-header bg-white">
              <div className="row justify-content-between">
                <div className="col">
                  <p className="text-muted">
                    Order ID <span className="font-weight-bold text-dark">{items._id}</span>
                  </p>
                  <p className="text-muted">
                    Name <span className="font-weight-bold text-dark">{items.buyer.name}</span>
                  </p>
                  <p className="text-muted">
                    Place On <span className="font-weight-bold text-dark">{formatDate(items.bookingDate)}</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card-body">
              <div className="media flex-column flex-sm-row">
                <div className="media-body">
                  <h5 className="bold">{items.product.activity}</h5>
                  <h6>Place - {items.product.destinationName}</h6>
                  <p className="text-muted">Duration: {items.product.duration} day(s)</p>
                  <h4 className="mt-3 mb-4 bold">
                    <span>&#x20B9;</span> {items.product.price}
                  </h4>
                  <p className="text-muted">Status: {items.status}</p>
                </div>
                <img
                  className="align-self-center img-fluid"
                  src={`http://localhost:8000/api/v1/package/package-photo/${items.product._id}`}
                  width="180"
                  height="180"
                  alt={items.product.destinationName}
                />
              </div>
            </div>

            <div className="card-footer bg-white px-sm-3 pt-sm-4 px-0">
              <div className="row text-center">
                <div className="col my-auto border-line">
                  <button
                    value={items._id}
                    className="btn btn-danger mx-2"
                    style={{
                      borderRadius: "15px",
                      padding: "8px",
                    }}
                    onClick={handleBookingCancel}
                    disabled={items.status === "cancelled"}
                  >
                    {items.status === "cancelled" ? "Already Cancelled" : "Cancel Booking"}
                  </button>
                  
                  <ReceiptButton bookingId={items._id} />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ViewBooking;