// RazorpayButton.jsx
import React from 'react';

const RazorpayButton = ({ amount, packageName }) => {
  const loadRazorpay = () => {
    const options = {
      key: "YOUR_PUBLIC_KEY", // Replace with your Razorpay public key
      amount: amount * 100, // Amount in paise (5000 = ₹50.00)
      currency: "INR",
      name: "Tour and Travels",
      description: `Booking for ${packageName}`,
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        // Optionally, redirect or store info in DB
      },
      prefill: {
        name: "Your Name",
        email: "email@example.com",
        contact: "9999999999"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <button onClick={loadRazorpay} className="pay-btn">
      Pay with Razorpay
    </button>
  );
};

export default RazorpayButton;
