import React from 'react';
import styles from './styles.module.css';

export default function Video({ src }) {
  return (
    <iframe
      className={styles.video}
      width="100%"
      height="auto"
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen>
    </iframe>
  );
}
