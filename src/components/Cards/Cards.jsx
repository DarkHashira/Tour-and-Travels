import React from "react";
import './Cards.css'; // Assuming you have a CSS file for styling


const Cards = () =>{
    return(
        <>
        <div className="container cards">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-4 card1" >
                            <img src="images/cards/goa.jpg" alt="...." height={'250px'} width={'100%'}></img>
                            <a href="https://goa-tourism-guide-a9d9eg3.gamma.site/">Trip to Goa by SARASH</a>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-4 card1" >
                            <img src="images/cards/kashmir.jpg" alt="...." height={'250px'} width={'100%'}></img>
                            <a href="https://explore-kashmir-wjakj2j.gamma.site/" >Trip to Kashmir by SARASH</a>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-4 card1" >
                            <img src="images/cards/delhi.jpg" alt="...." height={'250px'} width={'100%'}></img>
                            <a href="https://discover-delhi-cm5qf7g.gamma.site/">Trip to Delhi by SARASH</a>
                        </div>
                    </div>
                </div>
        </>
    )
}


export default Cards;