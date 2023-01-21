import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const Notfound = () => {
  return (
    <div className={styles.container}>
      <h1>ERROR 404</h1>
      <p>Página não encontrada</p>
      <Link to="/" className="btn-redirect">Voltar ao Inicio</Link>
    </div>
  )
}

export default Notfound;
