import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const Badge = ({ icon, label, type, variant = 'default' }) => {
  return (
    <span 
      className={clsx(
        styles.badge, 
        styles[type], 
        styles[variant]
      )}
      title={label}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.label}>{label}</span>
    </span>
  );
};

export default Badge;