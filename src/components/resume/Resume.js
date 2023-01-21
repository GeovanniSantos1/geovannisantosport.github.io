import React from 'react';
import styles from './Resume.module.css';
import { BigHead } from '@bigheads/core';
import imgGithub from '../../images/githubff.svg';
import imgLinkedin from '../../images/linkedinff.svg';

import { useInView } from 'react-intersection-observer';

const Resume = () => {
  const { ref: container, inView: containerIsVisible } = useInView();

  return (
    <div
      ref={container}
      className={`${styles.container} ${containerIsVisible ? 'animated_show' : ''}`}
      id='resume'
    >
      <div className={styles.presentation}>
        <div className={styles.text}>
          <h1>Oi, eu sou <span >Geovanni!</span>
          </h1>
          <h2>Desenvolvedor De Software.</h2>
          <h3>C#, .Net, HTML, CSS, JS, Azure</h3>
        </div>
        <div className={styles.link}>
          {/* upload para github, copiar o link e trocar palavra blob por raw */}
          <a href='https://github.com/GeovanniSantos1/GeovanniSantos1/blob/main/curriculo%20Geovanni%20Santos.pdf' download='' className='btn-redirect' target="blank" rel="noreferrer">Baixar currículo.pdf </a>
        </div>
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
      </div>
      <BigHead className={styles.caricatureBigHead}
        accessory="shades"
        body="chest"
        circleColor="blue"
        clothing="shirt"
        clothingColor="black"
        eyebrows="raised"
        eyes="happy"
        faceMaskColor={false}
        facialHair="none"
        graphic="react"
        hair="pixie"
        hairColor="brown"
        hat="none"
        hatColor="white"
        lipColor="red"
        mouth="grin"
        skinTone="yellow"
      />
    </div>
  )
}

export default Resume;
