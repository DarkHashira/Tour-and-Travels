import React, { useEffect, useState } from 'react';
import './Info.css';
import Header from '../Header/Header';
import Title from "../Title/Title";
import Menu from "../Nabar/Menu";
import Footer from '../Footer/Footer';
import { useParams } from 'react-router-dom';
import BookingForm from '../BookingForm/Bookingform';

import goa1 from  "./img/goa1.jpg";
import goa2 from  "./img/goa2.jpg";

import kedarnath1 from  "./img/kedarnath1.jpg";
import kedarnath2 from  "./img/kedarnath2.jpg";

import rameshwaram1 from  "./img/rameshwaram1.jpg";
import rameshwaram2 from  "./img/rameshwaram2.jpg";

import rajasthan1 from  "./img/rajasthan1.jpg";
import rajasthan2 from  "./img/rajasthan2.jpg";

import mumbai1 from  "./img/mumbai1.jpg";
import mumbai2 from  "./img/mumbai2.jpg"; 

import manali1 from  "./img/manali1.jpg"; 
import manali2 from  "./img/manali2.jpg";

import delhi1 from  "./img/delhi1.jpg";
import delhi2 from  "./img/delhi2.jpg";

import varanasi1 from  "./img/varanasi1.jpg";
import varanasi2 from  "./img/varanasi2.jpg";

import kolkata1 from  "./img/kolkata1.jpg";
import kolkata2 from  "./img/kolkata2.jpg";

import lakshadweep1 from  "./img/lakshadweep1.jpg";
import lakshadweep2 from  "./img/lakshadweep2.jpg";

const packageDetails = {
  goa: {
    destination: "Goa, India",
    duration: "7 days, 6 nights",
    departure: "Howrah, Kolkata",
    age: "10+",
    image: goa1,
    image1: goa2,
    includes: ["Flights", "Hotel Stay", "Breakfast", "Sightseeing"],
    description: "Explore the beautiful beaches, vibrant nightlife, and Portuguese heritage of Goa. Enjoy water sports and coastal cuisine.",
    plan: [
      { day: "Day 1", title: "Arrival in Goa", desc: "Relax and explore the nearby beach." },
      { day: "Day 2", title: "North Goa", desc: "Visit Baga, Calangute, Fort Aguada." },
      { day: "Day 3", title: "South Goa", desc: "Temples, churches, and serene beaches." },
      { day: "Day 4", title: "Departure", desc: "Check out and head home with memories." },
    ]
  },
  kedarnath: {
    destination: "Kedarnath, Uttarakhand",
    duration: "7 days, 6 nights",
    departure: "Howrah, Kolkata",
    age: "12+",
    image: kedarnath1,
    image1: kedarnath2,
    includes: ["Train Journey", "Temple Visit", "Lodging"],
    description: "A spiritual journey to the Himalayas. Visit the sacred Kedarnath temple and enjoy breathtaking mountain views.",
    plan: [
      { day: "Day 1", title: "Train to Haridwar", desc: "Board the train and travel overnight." },
      { day: "Day 2", title: "Haridwar", desc: "Local sightseeing and Ganga aarti." },
      { day: "Day 3", title: "Trek to Kedarnath", desc: "Reach Kedarnath temple." },
      { day: "Day 7", title: "Return", desc: "Back to Kolkata." },
    ]
  },
  rameshwaram: {
    destination: "Rameshwaram, Tamil Nadu",
    duration: "7 days, 6 nights",
    departure: "Chennai Central",
    age: "8+",
    image: rameshwaram1,
    image1: rameshwaram2,
    includes: ["Train", "Temple Visits", "Beach Tour"],
    description: "A sacred coastal town known for Ramanathaswamy Temple, Pamban Bridge and serene beaches.",
    plan: [
      { day: "Day 1", title: "Arrival", desc: "Check-in and temple darshan." },
      { day: "Day 2", title: "City Tour", desc: "Explore temples, beaches and local culture." },
      { day: "Day 7", title: "Return", desc: "Departure with blessings." },
    ]
  },
  rajasthan: {
    destination: "Rajasthan, India",
    duration: "7 days, 6 nights",
    departure: "Jaipur",
    age: "10+",
    image: rajasthan1,
    image1: rajasthan2,
    includes: ["Desert Safari", "Palace Tours", "Folk Dances"],
    description: "Royal palaces, forts, and the Thar desert await in Rajasthan. Immerse yourself in colorful culture and heritage.",
    plan: [
      { day: "Day 1", title: "Arrival at Jaipur", desc: "Welcome and hotel check-in." },
      { day: "Day 2", title: "City Tour", desc: "Visit Hawa Mahal, Amber Fort, City Palace." },
      { day: "Day 4", title: "Desert Safari", desc: "Camp under the stars in Jaisalmer." },
      { day: "Day 7", title: "Return", desc: "Goodbye to the land of kings." },
    ]
  },
  mumbai: {
    destination: "Mumbai, Maharashtra",
    duration: "7 days, 6 nights",
    departure: "Howrah Station",
    age: "10+",
    image: mumbai1,
    image1: mumbai2,
    includes: ["City Tour", "Local Trains", "Bollywood Experience"],
    description: "The city of dreams. Explore the Gateway of India, Marine Drive, and the bustling streets of Mumbai.",
    plan: [
      { day: "Day 1", title: "Arrival", desc: "Check-in and relax." },
      { day: "Day 2", title: "Mumbai Darshan", desc: "Visit famous landmarks and enjoy street food." },
      { day: "Day 7", title: "Return", desc: "Travel back home." },
    ]
  },
  manali: {
    destination: "Manali, Himachal Pradesh",
    duration: "7 days, 6 nights",
    departure: "Delhi ISBT",
    age: "8+",
    image: manali1,
    image1: manali2,
    includes: ["Bus", "Hotel", "Snow Activities"],
    description: "Snowy hills, adventure sports and scenic landscapes. A winter wonderland experience.",
    plan: [
      { day: "Day 1", title: "Arrival", desc: "Reach Manali, relax." },
      { day: "Day 2", title: "Solang Valley", desc: "Paragliding and skiing." },
      { day: "Day 6", title: "Return", desc: "Journey back to Delhi." },
    ]
  },
  delhi: {
    destination: "Delhi, India",
    duration: "7 days, 6 nights",
    departure: "Sealdah Station",
    age: "8+",
    image: delhi1,
    image1: delhi2,
    includes: ["Metro Pass", "Monument Entry", "Food Tour"],
    description: "India’s capital with rich history. Visit Red Fort, Qutub Minar, and experience street food at Chandni Chowk.",
    plan: [
      { day: "Day 1", title: "Arrival", desc: "Hotel check-in and evening walk." },
      { day: "Day 2", title: "Historical Tour", desc: "Red Fort, India Gate, Humayun's Tomb." },
      { day: "Day 7", title: "Return", desc: "Back to home." },
    ]
  },
  varanasi: {
    destination: "Varanasi, Uttar Pradesh",
    duration: "7 days, 6 nights",
    departure: "Kolkata",
    age: "10+",
    image: varanasi1,
    image1: varanasi2,
    includes: ["Ganga Aarti", "Temple Visits", "Food"],
    description: "The spiritual capital of India. Experience Ganga Aarti, Kashi Vishwanath Temple, and holy ghats.",
    plan: [
      { day: "Day 1", title: "Arrival", desc: "Hotel check-in and evening Ganga Aarti." },
      { day: "Day 2", title: "Temple Visits", desc: "Kashi Vishwanath and Sankat Mochan." },
      { day: "Day 7", title: "Return", desc: "Travel back to Kolkata." },
    ]
  },
  kolkata: {
    destination: "Kolkata, West Bengal",
    duration: "7 days, 6 nights",
    departure: "Kolkata (local trip)",
    age: "5+",
    image: kolkata1,
    image1: kolkata2, 
    includes: ["Museum", "Victoria Memorial", "Tram Ride"],
    description: "City of Joy – Explore colonial buildings, tram rides, and iconic food.",
    plan: [
      { day: "Day 1", title: "Kickoff", desc: "Walk through Park Street and try local food." },
      { day: "Day 2", title: "Museums and Culture", desc: "Science City, Indian Museum." },
      { day: "Day 6", title: "Wrap up", desc: "Souvenir shopping and tram ride." },
    ]
  },
  lakshadweep: {
    destination: "Lakshadweep Islands",
    duration: "7 days, 6 nights",
    departure: "Kochi",
    age: "12+",
    image: lakshadweep1,
    image1: lakshadweep2,
    includes: ["Ferry", "Scuba Diving", "Beach Stay"],
    description: "Tropical paradise with coral reefs, crystal-clear waters and marine adventures.",
    plan: [
      { day: "Day 1", title: "Arrival", desc: "Reach Kochi and board ferry." },
      { day: "Day 2", title: "Dive Day", desc: "Scuba diving and beach exploration." },
      { day: "Day 7", title: "Return", desc: "Travel back from paradise." },
    ]
  }
};

const Info = () => {
  const { id } = useParams();
  const [pkg, setPkg] = useState(null);
    console.log("Current ID from URL:", id);
    console.log("Fetched Package:", pkg);

  const [showBooking, setShowBooking] = useState(false);
  useEffect(() => {
    const data = packageDetails[id];
    setPkg(data);
  }, [id]);

  if (!pkg) return <h2 className='text-center mt-5'>Package Not Found</h2>;

  
  return (
    <>
      <Header />
      <Title />
      <Menu />
      <div className='Info'>
        <div className='container'>
          <div className='row'>
            <div className='col-3'>
              <div className='preview'>
                <figure>
                  <img src={pkg.image} alt={id} />
                </figure>
                <figure>
                  <img src={pkg.image1} alt={id} />
                </figure>
                <button className='booknow' type='button' onClick={() => setShowBooking(true)}>
                  Book Now
                </button>
                {showBooking && <BookingForm destination={pkg?.destination} onClose={() => setShowBooking(false)} />}
              </div>
            </div>

            <div className='col-9'>
              <div className='details'>
                <h1>Destination Overview</h1>
                <p>{pkg.description}</p>

                <h1>Tour Plan</h1>
                <table>
                  <tbody>
                    <tr><td>Destination</td><td>{pkg.destination}</td></tr>
                    <tr><td>Package Duration</td><td>{pkg.duration}</td></tr>
                    <tr><td>Departure</td><td>{pkg.departure}</td></tr>
                    <tr><td>Age</td><td>{pkg.age}</td></tr>
                    <tr>
                      <td>Package Includes</td>
                      <td>
                        <ul>
                          {pkg.includes.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='plans'>
                <h1>Description</h1>
                <ul>
                  {pkg.plan.map((p, index) => (
                    <li key={index}>
                      <h4>{p.day}: {p.title}</h4>
                      {p.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Info;
