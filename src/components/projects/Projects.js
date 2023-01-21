import React from 'react';
import styles from './Projects.module.css';
import { Link } from "react-router-dom";
import { projectsList } from '../../data/projects';

import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref: cards, inView: cardsIsVisible } = useInView();
  const { ref: title, inView: titleIsVisible } = useInView();

  // setar animação para cada card em separado

  return (
    <div className={styles.container} id='projects'>
      <h1 ref={title} className={`title-topic ${titleIsVisible ? 'animated_show' : ''}`}>MEUS PROJETOS</h1>
      <div
        ref={cards}
        className={`${styles.cards} ${cardsIsVisible ? 'animated_show' : ''}`}
      >
        {projectsList && projectsList.map((project) => (
          <div key={project.id} className={styles.cover}>
            <h2 className={styles.cover_name}>{project.name.toUpperCase()}</h2>
            <img src={project.img} alt="landing page delivery" />
            <Link to={`/project/${project.id}`} className="btn-redirect">Ver detalhes</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;
