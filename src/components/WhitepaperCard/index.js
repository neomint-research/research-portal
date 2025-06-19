import React from 'react';
import { User, Calendar, Label, Download } from 'iconoir-react';
import styles from './styles.module.css';

export default function WhitepaperCard({ title, subtitle, author, date, category, tags, slug }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          <a href={`/docs/${slug}`}>{title}</a>
        </h3>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.metadata}>
        <div className={styles.metaItem}>
          <User size={16} color="var(--color-highlight)" />
          <span>{author}</span>
        </div>
        <div className={styles.metaItem}>
          <Calendar size={16} color="var(--color-highlight)" />
          <span>{date}</span>
        </div>
        <div className={styles.metaItem}>
          <Label size={16} color="var(--color-highlight)" />
          <span>{category}</span>
        </div>
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}