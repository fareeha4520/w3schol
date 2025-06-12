import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './addCarousel.css'; // link to CSS below

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      src: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
      caption: 'Caption Text ',
    },
    {
      src: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
      caption: 'Caption Two',
    },
    {
      src: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
      caption: 'Caption Three',
    },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="carousel-wrapper">
      <p className="slide-number">{currentSlide + 1} / {images.length}</p>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="carousel-slide">
            <div className="image-container">
              <div className='dot-bar'>
                <span className='dot' id='dot-red'></span>
                <span className='dot' id='dot-yellow'></span>
                <span className='dot' id='dot-green'></span>
              </div>
              <div>
                <input type='text' placeholder='www.w3schools.com/howto/' disabled >
                </input></div>
              <img src={item.src} alt={`Slide ${index + 1}`} />

              
              <p className="caption">{item.caption}</p>
              
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;