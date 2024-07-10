/*==================
    PROJECT LIST
==================*/
// src/components/ProjectList/ProjectList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import './ProjectList.scss';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects: ', error);
      });
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <main className="project">
      <h1 className="project__title">📂 Projects</h1>
      <ul className="project__list">
        {projects.map(project => (
          <li key={project.id} className="project__item" onClick={() => handleProjectClick(project)}>
            {project.images.length > 0 && (
              <img className="project__image" src={project.images[0].image} alt={project.title} />
            )}
            <h2 className='project__name'>{project.title}</h2>
            <p className="project__description">{project.description.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseModal} />
      )}
    </main>
  );
};

export default ProjectList;