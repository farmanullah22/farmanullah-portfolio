import React from "react";


const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-info">
        <h2 className="about-heading">About Me__</h2>
        <p className="about-para">
          I am a Full Stack Developer with a passion for creating dynamic and responsive web experiences. I have experience in building websites and web applications using modern technologies like React, Node.js, and MongoDB. I am always looking for new challenges and opportunities to learn and grow as a developer.
        </p>
        <p className="about-para">I have a strong foundation in JavaScript, HTML, CSS, and modern frameworks that allow me to develop high-performance, interactive applications. I am also proficient in RESTful APIs, database management, and cloud-based solutions, ensuring seamless functionality across different platforms.</p>
        <button className="about-button">Read More</button>
        </div>
      <div className="about-image">
      <img src="/images/aboutimage.jpg" alt="Hero" />
      </div>
      </div>
    </section>
  );
}

export default About;