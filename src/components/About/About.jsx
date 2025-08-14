import React from "react";
import Menu from "../Nabar/Menu";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Footer from "../Footer/Footer";
import './About.css'; // Assuming you have a CSS file for styling

const Banner = 'images/SARASH.png'

const About = () =>{
    return(
        <>
        <Header/>
        <Title/>
         <Menu/>
         {/* <div className='container About'>
            <img src={Banner} alt={Banner} height={'500px'} width={'300 px'}  />
            <div className="text">
                <h3>Company Philosophy :</h3>
                <p>Our mission is to be the leading and most trustworthy travel management company that sets the standard for professionalism, reliability and transparency to its customers.</p>
                <h3>Strenghts :</h3>
                <ul>
                    <li>We have varied experience with global networking travel management companies</li>
                    <li>Broad expertise in the local travel market</li>
                    <li>Client-first approach to business</li>
                </ul>           
                <h3>Turn Around Time experts :</h3>
                <p>Our excellent rapport of over two decades with the Airlines, Hotels, Car Rentals, Visa Providers has given us the confidence to do the best in times of crisis or emergencies and won us the trust of our clients. Robust decision making process owing to us being a single owner agency enables us to “Focus on exceeding service expectation”.</p>
            </div>
         </div> */}
         <div className="container About">
            <div className="row">
                <div className="col-lg-6 col-sm-12 image ">
                    <img src={Banner} alt={Banner} height={'500px'} width={'300 px'}  />
                </div>
                <div className="col-lg-6 col-sm-12 text">
                    <h3>Company Philosophy :</h3>
                    <p>Our mission is to be the leading and most trustworthy travel management company that sets the standard for professionalism, reliability and transparency to its customers.</p>
                    <h3>Strenghts :</h3>
                    <ul>
                        <li>We have varied experience with global networking travel management companies</li>
                        <li>Broad expertise in the local travel market</li>
                        <li>Client-first approach to business</li>
                    </ul>           
                    <h3>Turn Around Time experts :</h3>
                    <p>Our excellent rapport of over two decades with the Airlines, Hotels, Car Rentals, Visa Providers has given us the confidence to do the best in times of crisis or emergencies and won us the trust of our clients. Robust decision making process owing to us being a single owner agency enables us to “Focus on exceeding service expectation”.</p>
                </div>

            </div>

         </div>
         <Footer />
        </>
    )
}

export default About;