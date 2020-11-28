import React from 'react'
import Slider from "react-slick";


function SlickSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '40px'
            }
          }
        ]
      };
    return (
        <div className="slider-container">
            <Slider {...settings}>
          <div>
             <img
                  className="slick-images"
                  src={require("../assets/img/grey.jpg")}
                  alt=""
                />
          </div>
          <div>
             <img
                  className="slick-images"
                  src={require("../assets/img/red.jpg")}
                  alt=""
                />
          </div>
          <div>
            <img
                  className="slick-images"
                  src={require("../assets/img/white.jpg")}
                  alt=""
                />
          </div>
          <div>
            <img
                  className="slick-images"
                  src={require("../assets/img/black.jpg")}
                  alt=""
                />
          </div>
        </Slider>
            
        </div>
    )
}

export default SlickSlider
