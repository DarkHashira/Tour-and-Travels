import React from "react";
import './Slider.css'; // Assuming you have a CSS file for styling

const slider = 'Images/hotel.jpg';
const slider1 = 'Images/sea.jpg';
const slider2 = 'Images/mountain.jpg';
const slider3 = 'Images/sunny.jpg';

const Slider = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="slider">
                            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                    <img class="d-block w-100" src={slider} alt="First slide"/>
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" src={slider1} alt="Second slide"/>
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" src={slider2} alt="Third slide"/>
                                    </div>
                                    <div class="carousel-item">
                                    <img class="d-block w-100" src={slider3} alt="4th slide"/>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Slider;
