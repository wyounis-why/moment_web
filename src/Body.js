import React from "react";
import "./Body.css";

function Body() {
  return (
    <div className="body-container">
      <div className="paragraphs-wrapper">
        <div className="paragraph left">
          We are deeply committed to fostering an environment where individuals
          can freely express their personal journeys in life, moment by moment.
        </div>
        <div className="flex">
          <h1 id="first" className="title">
            YOUR {""}{" "}
          </h1>
          <h1 className="title"> MOMENT</h1>
        </div>
        <div className="paragraph right">
          Our mission extends beyond simply providing a platform; it's about
          building a community rooted in authenticity, empathy, and mutual
          growth.
        </div>
        <div className="paragraph left">
          We strive to make everyone feel heard, valued, and empowered as they
          navigate their unique paths. Your journey is personal.
        </div>
        <div className="paragraph right">
          We believe in the power of reflection, documentation, and shared
          experiences.
        </div>
        <div className="paragraph left">
          Our app is designed to help you track your own progress, gain insights
          from your experiences, and derive comfort and inspiration from
          understanding that life, with all its ups and downs, is a shared
          journey.
        </div>
        <div className="paragraph right">
          While keeping track of your own voyage, you can also connect with
          friends and loved ones, following their journeys, celebrating their
          triumphs, and supporting them through challenges because
        </div>
      </div>
    </div>
  );
}

export default Body;
