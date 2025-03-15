import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2><span className="hero-span"> Hi, I am </span> </h2>
        <h2>Full Stack Developer</h2>
        {/* <h3>Hi, i am a Full Stack Developer</h3> */}
        <h5>Turning ideas into dynamic and responsive web experiences. Let’s create something great!</h5>
        <button className="cta-button">Read More</button>
      </div>
      <div className="hero-image">
        <img src="./images/farman.jpg" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
