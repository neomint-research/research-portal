import React from 'react';
import { User, Calendar, Label, Download } from 'iconoir-react';
import Badge from '../Badge';
import styles from './styles.module.css';

export default function WhitepaperCard({ title, subtitle, author, date, category, tags, slug, format, depth }) {
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
      </div>
      <div className={styles.badges}>
        {format && (
          <Badge
            icon={
              format === 'whitepaper' ? '📄' :
              format === 'essay' ? '✍️' :
              format === 'discussion' ? '💭' :
              format === 'framework' ? '🔧' : '📄'
            }
            label={format.charAt(0).toUpperCase() + format.slice(1)}
            type="format"
            variant={format}
          />
        )}
        {depth && (
          <Badge
            icon={
              depth === 'intro' ? '🚀' :
              depth === 'deep' ? '🧠' :
              depth === 'expert' ? '🎓' : '🚀'
            }
            label={depth.charAt(0).toUpperCase() + depth.slice(1)}
            type="depth"
            variant={depth}
          />
        )}
        {category && (
          <Badge
            icon="🏷️"
            label={category}
            type="category"
          />
        )}
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
}