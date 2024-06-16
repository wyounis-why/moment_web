import React from "react";
import "./Body.css";
import one from "./assests/1.png";
import two from "./assests/2.png";
import three from "./assests/3.png";
import four from "./assests/4.png";
import five from "./assests/5.png";
import six from "./assests/6.png";

function Body() {
  return (
    <div className="body-container">
      <div className="paragraphs-wrapper">
        <div className="flex">
          <h1 id="first" className="title">
            Bring Journaling
          </h1>
          <h1 className="title"> Into a Social World</h1>
        </div>
        <div className="border-top">
          <h2>
            <strong className="subtitle">Connecting You with You</strong>
          </h2>
        </div>
        <div className="row">
          <div className="paragraph-img left core">
            <img src={three} alt="Logo" className="one" />
          </div>
          <div className="paragraph right core">
            Did you Learn something today and want to take a moment to write it
            down
          </div>
        </div>
        <div className="row">
          {/* <div className="paragraph right important">
            <strong> What a social app is meant to be</strong>
            <p className="ok">True Fans, No Ads, No Comments, No Likes</p>
          </div> */}
          <div className="paragraph right important">
            <p className="ok">
              Take a moment to write down your thoughts, capture a video or
              photo of an experience, or even record audio of a significant
              moment.
            </p>
          </div>
          <div className="paragraph-img left important">
            <img src={four} alt="Logo" className="one" />
          </div>
        </div>

        <div className="row">
          <div className="paragraph-img left ok">
            <img src={one} alt="Logo" className="one" />
          </div>
          <div className="paragraph right ok">
            Take a look back at all the moments you've had, while staying
            focused on what you're grateful for and the things that make you
            happy.
          </div>
        </div>

        <div className="row">
          <div className="paragraph right bad">
            Filter and revisit all your insightful moments, empowering you to
            reflect and grow continuously.
          </div>
          <div className="paragraph-img left bad">
            <img src={two} alt="Logo" className="one" />
          </div>
        </div>

        <div className="row">
          <div className="paragraph-img left core">
            <img src={five} alt="Logo" className="one" />
          </div>
          <div className="paragraph right core">
            Reflect on previous moments
          </div>
        </div>
        <div className="row">
          <div className="paragraph right important">
            Follow your friends' moments and grow together, sharing experiences
            and supporting each other.{" "}
          </div>

          <div className="paragraph-img left important">
            <img src={six} alt="Logo" className="one" />
          </div>
        </div>
        <div className="flex">
          <h1 className="footer_end"> EVERY MOMENT MATTERS</h1>
        </div>
      </div>
    </div>
  );
}

export default Body;
