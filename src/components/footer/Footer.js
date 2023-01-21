import React from 'react';
import styles from './Footer.module.css';
import imgGithub from '../../images/githubff.svg';
import imgLinkedin from '../../images/linkedinff.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Portfolio Desenvolvido por <br /> <span>Geovanni</span> &copy; 2023</p>
      <div className={styles.icons}>
        <div className={styles.links1}>
          <a href="https://github.com/GeovanniSantos1" target="blank" rel="noreferrer">
            <img
              className={styles.transparente}
              src={imgGithub}
              alt="github-icon"
            />
          </a>
        </div>
        <div className={styles.links2}>
          <a
            href="https://www.linkedin.com/in/geovanni-santos-de-oliveira-986243140/" target="blank" rel="noreferrer">
            <img
              className={styles.transparente}
              src={imgLinkedin}
              alt="github-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
