import React from 'react';
import './Projects.css';

function ProjectCard({ title, description, link, image }) {
  return (
    <div className="project-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

export default ProjectCard;
