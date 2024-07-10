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
    axios.get('http://127.0.0.1:8000/api/projects/')
      .then(response => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch(error => {
        console.error('Error fetching projects: ', error);
      });
  }, []);

  return (
    <main className="project">
      <h1 className="project__title">📂 Projects</h1>
      <ul className="project__list">
        {projects.map(project => (
          <li key={project.id} className="project__item">
            <Link to={`/projects/${project.id}`}>
              {project.images.length > 0 && (
                <img className="project__image" src={project.images[0].image} alt={project.title} />
              )}
              <h2 className='project__name'>{project.title}</h2>
              <p className="project__description">{project.description.substring(0, 100)}...</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProjectList;