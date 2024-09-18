import ImageGallery from "react-image-gallery";
import { useState } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import c1 from "../assets/Carousel/c1.jpg";
import c2 from "../assets/Carousel/c2.jpg";
import c3 from "../assets/Carousel/c3.jpg";
import c4 from "../assets/Carousel/c4.jpg";
import c5 from "../assets/Carousel/c5.jpg";
const Gallery = () => {
  const images = [
    {
      original: c1,
      thumbnail: c1,
    },
    {
      original: c2,
      thumbnail: c2,
    },
    {
      original: c3,
      thumbnail: c3,
    },
    {
      original: c4,
      thumbnail: c4,
    },
    {
      original: c5,
      thumbnail: c5,
    },
  ];

  return (
    <ImageGallery
      showPlayButton={false}
      showBullets={false}
      showNav={false}
      showFullscreenButton={false}
      items={images}
    />
  );
};

export default Gallery;
