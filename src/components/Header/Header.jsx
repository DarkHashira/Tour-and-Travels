import React from "react";
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () =>{
    return(
        <>
            <div className="header">
                <div className="mobile">
                    <a href="tel:+917479106468"><i class="fas fa-phone"></i> + 91-7479106468</a>
                </div>
                <div className="email">
                    <a href="mailto:darnab628@gmail.com"><i className="fas fa-envelope"></i>monkeyD.Luffy@gmail.com</a>
                </div>
                <div className="social">
                    <div className="social-media">
                        <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
                        <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
                        <a href="https://www.youtube.com"><i className="fab fa-youtube"></i></a>
                        <a href="https://www.whatsapp.com"><i className="fab fa-whatsapp"></i></a>
                    </div>
                </div>
            </div> 
        </>
    )
}
export default Header;