/*===================
    PROJECT DETAIL
===================*/
// src/components/ProjectDetail/ProjectDetail.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
      <a href={project.link}>Project Link</a>
    </div>
  );
};

export default ProjectDetail;