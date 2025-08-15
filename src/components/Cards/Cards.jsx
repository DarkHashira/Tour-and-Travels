import React from "react";
import { Link } from "react-router-dom";
import './Cards.css'; // Assuming you have a CSS file for styling


const Cards = () =>{
    return(
        <>
        <div className="container cards">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-4 card1" >
                            <img src="/images/cards/goa.jpg" alt="...." height={'250px'} width={'100%'}></img>
                            <Link to="/info/goa">Trip to Goa by SARASH</Link>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-4 card1" >
                            <img src="/images/cards/kashmir.jpg" alt="...." height={'250px'} width={'100%'}></img>
                            <Link to="/info/kashmir">Trip to Kashmir by SARASH</Link>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-4 card1" >
                            <img src="/images/cards/delhi.jpg" alt="...." height={'250px'} width={'100%'}></img>
                            <Link to="/info/delhi">Trip to Delhi by SARASH</Link>
                        </div>
                    </div>
                </div>
        </>
    )
}


export default Cards;