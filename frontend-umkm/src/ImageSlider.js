import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './image/slide1.jpg';
import image2 from './image/slide2.jpg';
import image3 from './image/slide3.jpg';

const ImageSlider = () => {
  const images = [
    {imageSrc: image1, description: 'Slides 1'},
    {imageSrc: image2, description: 'Slides 2'},
    {imageSrc: image3, description: 'Slides 3'},
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image.imageSrc} alt={image.description} style={{width: '100%', height: 'auto'}}/>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;