import React from "react";

const Testimonial = ({ name, image, content }) => {
  return (
    <div className="bg-gray-100 mx-8 px-12 pb-12 text-center relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 flex justify-center items-center">
        <img className="w-16" src={image} alt={name} />
      </div>

      <h1 className="font-bold mt-14 pt-14 mb-5 text-center">{name}</h1>
      <p className="text-center">{content}</p>
    </div>
  );
};

export default Testimonial;
