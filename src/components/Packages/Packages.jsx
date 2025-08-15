import React from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Menu from "../Nabar/Menu";
import Footer from "../Footer/Footer";
import './Packages.css'; // Assuming you have a CSS file for styling
import { useNavigate } from "react-router-dom";



const Packages = () =>{
    const navigate = useNavigate() ;
    const packageData = [
        {
            id: 'goa',
            name: "Trip to Goa",
            price: "Rs. 5000/Person",
            days: "7",
            nights: "6",
            image: process.env.PUBLIC_URL + "/images/packages/goa.jpg",
        },
        {
            id: 'kedarnath',
            name: "Trip to Kedarnath",
            price: "Rs. 10,000/Person",
            days: "7",
            nights: "6",
            image: process.env.PUBLIC_URL + "/images/packages/kedarnath.jpg",
        },
        {
            id: 'rameshwaram',
            name: "Trip to Rameshwaram",
            price: "Rs. 10,000/Person",
            days: "7",
            nights: "6",
            image: process.env.PUBLIC_URL + "/images/packages/rameshwaram.jpg",
        },
        {
            id: 'rajasthan',
            name: "Trip to Rajasthan",
            price: "Rs. 10,000/Person",
            days: "7",
            nights: "6",
            image: process.env.PUBLIC_URL + "/images/packages/rajasthan.jpg",
        },
        {
            id: 'mumbai',
            name: "Trip to Mumbai",
            price: "Rs. 10,000/Person",
            days: "7",
            nights: "6",
            image: process.env.PUBLIC_URL + "/images/packages/mumbai.jpg",
        },
        {
            id: 'manali',
            name: "Trip to Manali",
            price: "Rs. 10,000/Person",
            days: "7",
            nights: "6",
            image: process.env.PUBLIC_URL + "/images/packages/manali.jpg",
        },
        {
            id: 'delhi',
            name: "Trip to Delhi",
            price: "Rs. 10,000/Person",
            days: "7",
            nights: "6",
            image: process.env.PUBLIC_URL + "/images/packages/delhi.jpg",
        },
        {
            id: 'varanasi',
            name: "Trip to Varanasi",
            price: "Rs. 10,000/Person",
            days: "7",
            nights: "6",
            image: process.env.PUBLIC_URL + "/images/packages/varanasi.jpg",
        },
        {
            id: 'kolkata',
            name: "Trip to Kolkata",
            price: "Rs. 10,000/Person",
            days: "7",
            nights: "6",
            image: process.env.PUBLIC_URL + "/images/packages/kolkata.jpg",
        },
        {
            id: 'lakshadweep',
            name: "Trip to Lakshadweep",
            price: "Rs. 10,000/Person",
            days: "7",
            nights: "6",
            image: process.env.PUBLIC_URL + "/images/packages/lakshadweep.jpg",
        }
];
    return(
        <>
        <Header />
        <Title />
        <Menu />
        <div className="container Packages">
            <div className="row">
               {packageData.map((pkg)=>(
                <div className="col-lg-6 col-md-12 col-sm-12" key={pkg.id}>
                    <div className="card1">
                        <div className="image">
                            <img src={pkg.image} alt={pkg.name} ></img>
                        </div>
                        <div className="text">
                            <h4>{pkg.name}</h4>
                            <h6>{pkg.price}</h6>
                            <h6>{pkg.nights}<span style={{ color: "red" }}>N</span> | {pkg.days}<span style={{ color: "red" }}>D</span></h6>
                            <div className="icons">
                                <i class="fa-solid fa-hotel"></i>
                                <i class="fa-solid fa-utensils"></i>
                                <i class="fa-solid fa-plane-departure"></i>
                                <i class="fa-solid fa-binoculars"></i>
                            </div>
                            <button className="btn-sm btn-danger" onClick={()=> navigate(`/info/${pkg.id}`)}>Book Now</button>
                        </div>
                    </div>
                    
                </div>
               ))}
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Packages ;