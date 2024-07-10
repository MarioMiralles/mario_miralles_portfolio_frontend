/*===================
    PROJECT DETAIL
===================*/
// src/components/ProjectDetail/ProjectDetail.jsx

import React, { useState, useEffect } from 'react';
import './ProjectDetail.scss';

const ProjectDetail = ({ project, onClose }) => {
  const [featureImage, setFeatureImage] = useState(project.images[1].image); // Skip the first image

  // Prevent background from scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleImageClick = (image) => {
    setFeatureImage(image.image);
  };

  return (
    <article className="modal">
      <div className="modal__content">
        <span className="modal__close" onClick={onClose}>&times;</span>
        <img className="modal__feature-image" src={featureImage} alt={project.title} />
        <section className="modal__images">
          {project.images
            .slice(1)
            .filter((image) => image.image !== featureImage)
            .map((image, index) => (
              <img 
                className="modal__image" 
                key={image.id} 
                src={image.image} 
                alt={`${project.title} ${index + 2}`} 
                onClick={() => handleImageClick(image)}
              />
          ))}
        </section>
        <section className="modal__details">
        <h2 className="modal__title">{project.title}</h2>
        <p className="modal__description">{project.description}</p>
        <a className="modal__link" href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
        </section>
      </div>
    </article>
  );
};

export default ProjectDetail;