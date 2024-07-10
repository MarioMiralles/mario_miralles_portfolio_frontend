/*==================
    HOMEPAGE
==================*/
// src/components/HomePage/HomePage.jsx

import React from 'react';
import './HomePage.scss';

const HomePage = () => {
  return (
    <article className='home'>
      <h1 className='home__title'>👋 Welcome</h1>
      <p className='home__paragraph'>
        I'm <strong>Mario Miralles</strong>, a passionate Full-Stack Software Engineer. I enjoy building interesting applications that
        solve real-world problems and exploring new technologies to expand my skill set.
      </p>
      <p className='home__paragraph'>
        In my spare time, I love to experiment with AI technologies, work on open-source projects, and contribute
        to the developer community.
      </p>
      <p className='home__paragraph'>
        Feel free to explore my projects and get in touch if you'd like to collaborate or have any questions!
      </p>
    </article>
  );
}

export default HomePage;