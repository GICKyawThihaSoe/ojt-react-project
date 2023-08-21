import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "../components/Testimonial";
import testimonials from "../data/testimonials";

const Carousel = () => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id}>
            <Testimonial
              name={testimonial.name}
              image={testimonial.image}
              content={testimonial.content}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
