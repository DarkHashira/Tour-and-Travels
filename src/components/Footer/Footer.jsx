import React from "react";
import './Footer.css'; // Assuming you have a CSS file for styling


const Footer = () =>{
    return(
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8 col-lg-4 1st">
                            <h5>ONE PIECE Tours And Travels PVT. LTD.</h5>
                            <p>At One Piecec, our mission is to be the most trusted and legendary travel management crew—charting the course with unmatched professionalism, unwavering reliability, and total transparency. Like the Grand Line, every journey with us is a step toward adventure, discovery, and dreams fulfilled.</p>
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-4 2nd">
                            <h5>Contact US</h5>
                            <p>Padmapukur, ward No 12, Baruipur, West Bengal 700144 , India</p><br/>
                            <p>Phone: +91 7479106468<br/>
                                +91 7479106468 / +91 74791064468<br/>
                                Mail :-     
                                <a href="mailto:darnab628@gmail.com"><i className="fas fa-envelope"></i>monkeyD.Luffy@gmail.com</a>
                                </p>
                            
                        </div>
                        <div className="col-sm-12 col-md-8 col-lg-4 contact">
                            <h5>Follow Us</h5>
                            <div className="col-sm-12 col-md-8 col-lg-4 social">
                                <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                                <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                                <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
                                <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
                                <a href="https://www.whatsapp.com"><i className="fab fa-whatsapp"></i></a>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-12 col-md-8 col-lg-4 copyright">
                        <h6>© Copyright 2024 by ONE PIECE Tours & Travels Pvt. Ltd. - All Rights Reserved</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;