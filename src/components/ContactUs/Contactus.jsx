import React from "react";
import Header from "../Header/Header";
import Title from "../Title/Title";
import Menu from "../Nabar/Menu";
import Footer from "../Footer/Footer";
import styles from "./Contactus.module.css"; // Import CSS module

const Contactus = () => {
    return ( 
        <>
        <Header />
        <Title />
        <Menu />
        <div className={styles.contactus}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.726724718872!2d88.42620087475117!3d22.363945140586516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a026db8159086f7%3A0xfc63d0e47cb50577!2sSahitya%20Sk!5e0!3m2!1sen!2sin!4v1710504395824!5m2!1sen!2sin" 
        width="100%" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className={styles.container}>
                <div className={styles.contactForm}>
                    <form action="#" method="POST">
                        <input type="text" name="UserName" placeholder="username" 
                        autoComplete="off" required/>
                        <input type="email" name="Email" placeholder="name123@gmail.com" 
                        autoComplete="off" required/>
                       <textarea name="message" cols="20" rows="6" autoComplete="off" required></textarea>
                       <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
};

export default Contactus;