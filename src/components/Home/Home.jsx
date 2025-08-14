import React from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Menu from "../Nabar/Menu";
import Slider from "../Slider/Slider";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import './Home.css'; 


const Home = () =>{
    return(
        <>
            <Header />
            <Title />
            <Menu />
            <div className="HomeWrapper">
                <Slider />
                <div className="Home">
                <div className="container body">
                    <h2>Travel Agents | Tour Operator : Best Baruipur Travel Agency</h2>
                    <p>Best tours and travels agency near your location in Kolkata offers tourism-related services i.e. different kinds of travelling packages for international and domestic destinations. Nearest travel agents to me in Kolkata will provide activities, car rentals, cruise lines, hotels, travel insurance and operate package tours in different domestic & overseas locations. Our reputed Kolkata travel agents and tour operators working very hard to satisfy our clients. You can find tourist and travels near me in Kolkata with best domestic and international tour packages. When you are someone who needs nearest travel agent to me then choose Nature Canvas Travel agency which a private reliable service company that provides tourism related services to the public on behalf of suppliers such as Visa, airlines, outstation car rentals, cruise lines, hotel or homestay accommodations, railways, and package tours in an organised way. Best Travel agents near me in Kolkata is always happy to help you in all kinds of tourism. So call Kolkata tourist and travels company near me in this contact no - +91-7479106468/ +91-7479106468. Nature Canvas travel agency near to me in Kolkata will be your best choice for any tourism service like pacakges, cabs visa etc. </p>
                    <Cards />
                </div>
            </div>
            </div>
            <Footer />
        </>
    )
}
export default Home;
