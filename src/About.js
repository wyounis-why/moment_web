import React from "react";
import "./Header.css";

function About() {
  return (
    <div className="about_container">
      <div className="flex_about">
        <h1 id="first" className="title">
          About
        </h1>
        <h1 className="title"> US</h1>
      </div>{" "}
      <div className="about_wrapper">
        <p>
          <strong className="start">We</strong>
          set out on a journey to help people learn who they are, where they
          came from, where they are going, and who they are going with. We
          believe that understanding these aspects of one’s life is essential
          for personal growth and fulfillment.
        </p>
        <p>
          <strong className="start_">Your Moment</strong> is a social journaling
          app designed to help you rediscover the profound benefits of
          journaling in a modern, connected world. In our fast-paced lives, it's
          easy to lose touch with our thoughts, emotions, and personal growth.
          Your Moment provides a dedicated space to document and share your
          life's important, core, lesson, good, bad, and okay moments with
          friends and a supportive community. We are deeply committed to
          fostering an environment where individuals can freely express their
          personal journeys in life, moment by moment. Our mission extends
          beyond simply providing a platform; it's about building a community
          rooted in authenticity, empathy, and mutual growth. We strive to make
          everyone feel heard, valued, and empowered as they navigate their
          unique paths. Journaling has been proven to enhance mental well-being,
          boost self-awareness, and track personal progress. With Your Moment,
          you can experience these benefits while also connecting with
          like-minded individuals who support and uplift you. It's more than
          just an app; it's a tool for self-discovery and a community where true
          supporters come together. Your journey is personal. We believe in the
          power of reflection, documentation, and shared experiences. Our app is
          designed to help you track your own progress, gain insights from your
          experiences, and derive comfort and inspiration from understanding
          that life, with all its ups and downs, is a shared journey. While
          keeping track of your own voyage, you can also connect with friends
          and loved ones, following their journeys, celebrating their triumphs,
          and supporting them through challenges. Start your journaling journey
          with Your Moment today and see how documenting your life’s moments can
          transform your perspective, deepen your relationships, and enrich your
          overall well-being. Rediscover the art of journaling and make every
          moment count with Your Moment.
        </p>
      </div>{" "}
      <div className="flex">
        <h1 className="footer_end"> EVERY MOMENT MATTERS</h1>
      </div>
    </div>
  );
}

export default About;
