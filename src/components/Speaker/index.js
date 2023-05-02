import React from 'react';
import styles from './styles.module.css';

export default function Speaker({ imageUrl, name, position }) {
  return (
    <div className={styles.card}>
      <img src={imageUrl} className={styles.image} />
      <div className={styles.description}>
        <p>{name}</p>
        <p className={styles.position}>{position}</p>
      </div>
    </div>
  );
}
