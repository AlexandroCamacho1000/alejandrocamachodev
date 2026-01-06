import React from 'react';
import './Projects.css';

function ProjectCard({ title, description, link, image, linkApp }) {
  return (
    <div className="project-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <a href={link} target="_blank" rel="noopener noreferrer">
        View Repository
      </a>

      {title === 'Pokemón App' && (
        <a href={linkApp} target="_blank" rel="noopener noreferrer">
          Test the App
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
