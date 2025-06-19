import React from 'react';
import styles from './styles.module.css';

export default function VerticalDivider({ height = '100%', color = 'var(--color-highlight)' }) {
  return (
    <div 
      className={styles.divider} 
      style={{ 
        height: height,
        backgroundColor: color 
      }}
    />
  );
}