/*==================
    PROJECT LIST
==================*/
// src/components/ProjectList/ProjectList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProjectList.scss';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects: ', error);
      });
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>
              <h2>{project.title}</h2>
              <p>{project.description.substring(0, 100)}...</p>
              {project.images.length > 0 && (
                <img src={project.images[0].image} alt={project.title} />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;