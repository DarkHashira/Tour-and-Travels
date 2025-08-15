import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Menu from "../Nabar/Menu";
import Title from "../Title/Title";
import './Gallery.css';

const images = [
  "/images/gallery/1.jpg", "/images/gallery/2.jpg", "/images/gallery/3.jpg", "/images/gallery/4.jpg",
  "/images/gallery/5.jpg", "/images/gallery/6.jpg", "/images/gallery/7.jpg", "/images/gallery/8.jpg",
  "/images/gallery/9.jpg", "/images/gallery/10.jpg", "/images/gallery/11.jpg", "/images/gallery/12.jpg",
  "/images/gallery/13.jpg", "/images/gallery/14.jpg", "/images/gallery/15.jpg", "/images/gallery/16.jpg",
  "/images/gallery/17.jpg", "/images/gallery/18.jpg", "/images/gallery/19.jpg", "/images/gallery/20.jpg",
  "/images/gallery/21.jpg", "/images/gallery/22.jpg", "/images/gallery/23.jpg", "/images/gallery/24.jpg",
  "/images/gallery/25.jpg", "/images/gallery/26.jpg", "/images/gallery/27.jpg", "/images/gallery/28.jpg",
  "/images/gallery/29.jpg", "/images/gallery/30.jpg",
];

const Gallery = () => {
  return (
    <>
      <Header />
      <Title />
      <Menu />

      <div className="gallery-container">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                className="gallery-img"
                alt={`Gallery ${i + 1}`}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      <Footer />
    </>
  );
};

export default Gallery;
