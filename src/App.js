import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Contactus from './components/ContactUs/Contactus.jsx';
import Packages from './components/Packages/Packages.jsx';
import Info from './components/Package_Info/Info';
import Login from './components/Login/Login.jsx';
import BookingForm from './components/BookingForm/Bookingform.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contactus' element={<Contactus />} />
          <Route path='/packages' element={<Packages />} />
          <Route path='/info/:id' element={<Info />} />
          <Route path='/login' element={<Login />} />
          <Route path='/booking/:destination' element={<BookingForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
