/*===================
    PROJECT DETAIL
===================*/
// src/components/ProjectDetail/ProjectDetail.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProjectDetail.scss';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios.get(`/api/projects/${id}/`)
      .then(response => {
        setProject(response.data);
      })
      .catch(error => {
        console.error('Error fetching project: ', error);
      });
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.link} target='_blank' rel='noopener noreferrer'>View Project</a>
      <div className="images">
        {project.images.map(image => (
          <img key={image.id} src={image.image} alt={project.title} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;