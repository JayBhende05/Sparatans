import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const stripePromise = loadStripe("pk_test_51O2PaUSA6nkwsRXSU6o05iAY2c4xoFhXA5cmPHqd0JwGCKa8l3iqyIYIz0ye3QLa0s9B2EO1rMFYZNhqru8A7Zth00hK8we9ac");

function Pay(props) {
  const navigate = useNavigate();
  let bookingData = props.data; // Use props.data directly
  console.log("Booking Data:", bookingData);

  const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) return;

      const cardElement = elements.getElement(CardElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.error("Payment failed:", error);
        alert("Payment failed. Please check your card details.");
      } else {
        try {
          console.log("Payment Method ID:", paymentMethod.id);

          const response = await axios.post("http://localhost:8000/api/v1/package/braintree/payment", {
            paymentMethodId: paymentMethod.id,
            booking: bookingData, // Send correct booking details
          });

          if (response.data.success) {
            toast.success("Payment Completed Successfully");
            navigate('/order');
          } else {
            toast.error("Payment failed, please try again.");
          }
        } catch (error) {
          console.error("Error processing payment:", error);
          toast.error("Something went wrong. Please try again.");
        }
      }
    };

    return (
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc" }}>
        <h2>Stripe Payment</h2>
        <CardElement />
        <button type="submit" disabled={!stripe} style={{ marginTop: "10px", padding: "10px", cursor: "pointer" }}>
          Pay Now
        </button>
      </form>
    );
  };

  return (
    <>
      <div className="container">
        <details>
          <summary>
            <button
              data-toggle="modal"
              data-target="#staticBackdrop"
              className="btn btn-primary border btn-lg btn-block book-btn"
              type="button"
              style={{ backgroundColor: "#f37c20", color: "white", marginTop: "20px" }}
            >
              Book Now
            </button>
          </summary>

          <div className="details-modal">
            <div className="details-modal-title">
              <h1>Payment Details</h1>
            </div>
            <div className="details-modal-content">
              <Elements stripe={stripePromise}>
                <CheckoutForm />
              </Elements>
            </div>
          </div>
        </details>
      </div>
    </>
  );
}

export default Pay;
