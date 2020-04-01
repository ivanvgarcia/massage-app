import React from 'react';
import styles from './carousel.module.css';

interface SlideProps {
  title: string;
  description: string;
}

const Slide: React.FC<SlideProps> = ({ title, description }) => {
  return (
    <div className={styles.slide}>
      <h1 className={styles['slide-title']}>{title}</h1>
      <p className={styles['slide-description']}>{description}</p>
    </div>
  );
};

export default Slide;
