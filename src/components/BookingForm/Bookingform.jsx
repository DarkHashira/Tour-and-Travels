import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = ({ destination, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    people: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking Confirmed for ${destination}!\nDetails:\nName: ${formData.name}\nDate: ${formData.date}`);
    // In future, send formData to backend
    onClose(); // close form after submit
  };

  return (
    <div className="booking-overlay">
      <div className="booking-form">
        <h2>Book Your Trip to {destination}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email Address" required onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <input type="number" name="people" min="1" placeholder="No. of People" value={formData.people} onChange={handleChange} />
          <input type="date" name="date" required onChange={handleChange} />
          <div className="btn-group">
            <button type="submit" className="confirm">Confirm Booking</button>
            <button type="button" className="cancel" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
