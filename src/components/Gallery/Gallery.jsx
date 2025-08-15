import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Menu from "../Nabar/Menu";
import Title from "../Title/Title";
import './Gallery.css';

const images = [
  process.env.PUBLIC_URL + "/images/gallery/1.jpg", process.env.PUBLIC_URL + "/images/gallery/2.jpg", process.env.PUBLIC_URL + "/images/gallery/3.jpg", process.env.PUBLIC_URL + "/images/gallery/4.jpg",
  process.env.PUBLIC_URL + "/images/gallery/5.jpg", process.env.PUBLIC_URL + "/images/gallery/6.jpg", process.env.PUBLIC_URL + "/images/gallery/7.jpg", process.env.PUBLIC_URL + "/images/gallery/8.jpg",
  process.env.PUBLIC_URL + "/images/gallery/9.jpg", process.env.PUBLIC_URL + "/images/gallery/10.jpg", process.env.PUBLIC_URL + "/images/gallery/11.jpg", process.env.PUBLIC_URL + "/images/gallery/12.jpg",
  process.env.PUBLIC_URL + "/images/gallery/13.jpg", process.env.PUBLIC_URL + "/images/gallery/14.jpg", process.env.PUBLIC_URL + "/images/gallery/15.jpg", process.env.PUBLIC_URL + "/images/gallery/16.jpg",
  process.env.PUBLIC_URL + "/images/gallery/17.jpg", process.env.PUBLIC_URL + "/images/gallery/18.jpg", process.env.PUBLIC_URL + "/images/gallery/19.jpg", process.env.PUBLIC_URL + "/images/gallery/20.jpg",
  process.env.PUBLIC_URL + "/images/gallery/21.jpg", process.env.PUBLIC_URL + "/images/gallery/22.jpg", process.env.PUBLIC_URL + "/images/gallery/23.jpg", process.env.PUBLIC_URL + "/images/gallery/24.jpg",
  process.env.PUBLIC_URL + "/images/gallery/25.jpg", process.env.PUBLIC_URL + "/images/gallery/26.jpg", process.env.PUBLIC_URL + "/images/gallery/27.jpg", process.env.PUBLIC_URL + "/images/gallery/28.jpg",
  process.env.PUBLIC_URL + "/images/gallery/29.jpg", process.env.PUBLIC_URL + "/images/gallery/30.jpg",
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
