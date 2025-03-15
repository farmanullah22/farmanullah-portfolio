import React from "react";

const projectData = [
  {
    title: "E-Commerce Shop Website",
    description:
      "A fully functional e-commerce platform built with React.js and Node.js. Features include user authentication, product management, and payment processing.",
    image: "/images/shopimg.jpg", // Correct way to reference an image from the public folder
  },
  {
    title: "lawparks Website",
    description:
      "A responsive portfolio website showcasing my projects and skills. Built with React.js and styled with CSS.",
    image: "/images/Portfolio.jpg", // Correct way to reference an image from the public folder
  },
  {
    title: "Blog Website",
    description:
      "A personal blog website built with Next.js and styled with Tailwind CSS. Features include dynamic routing and server-side rendering.",
    image: "/images/blogingimg.jpg", // Correct way to reference an image from the public folder
  },
  {
    title: "Thinking School Website",
    description:
      "A responsive website for a fictional school built with HTML, CSS, and JavaScript.",
    image: "/images/schlimg.jpg", // Correct way to reference an image from the public folder
  },
];

const Project = () => {
  return (
    <section className="projects">
      <h2 className="projects-header">Projects</h2>
      <p className="project-para">Explore a collection of innovative projects showcasing my expertise in web development. <br /> From dynamic web applications to AI-powered solutions, each project reflects a commitment to modern technology, efficiency, and user experience.</p>
      <div className="projects-list">
        {projectData.map(({ title, description, image }, index) => (
          <div className="project-card" key={index}>
            <img className="project-image" src={image} alt={title} />
            <div className="project-details">
              <h3 className="project-title">{title}</h3>
              <p className="project-description">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
