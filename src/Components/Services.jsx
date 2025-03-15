import React from "react";

const servicesData = [
  {
    title: "Full Stack",
    description:
      "I specialize in building responsive, high-performance websites using modern frameworks like React.js, Next.js, and Node.js.",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces to enhance user experience and engagement.",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Developing secure and scalable e-commerce platforms to help you sell products efficiently.",
  },
  {
    title: "SEO Optimization",
    description:
      "Improving website visibility with effective SEO strategies for higher search rankings.",
  },
  {
    title: "Custom Web Applications",
    description:
      "Building tailor-made web applications that cater to specific business requirements.",
  },
  {
    title: "Node.js",
    description:
      "I specialize in building responsive, high-performance websites using modern frameworks like React.js, Next.js, and Node.js.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2 className="services-header">Services</h2>
      <p className="services-intro">
        I offer a variety of services to help businesses and individuals
        establish a strong online presence. <br /> From web development to UI/UX 
        design, I create modern, efficient, and scalable solutions tailored to
        your needs.
      </p>
      <div className="services-list">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
