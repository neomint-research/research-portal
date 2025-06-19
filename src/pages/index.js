import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Brain, Cpu, Globe } from 'iconoir-react';
import WhitepaperCard from '@site/src/components/WhitepaperCard';
import VerticalDivider from '@site/src/components/VerticalDivider';
import styles from './index.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            NEOM<span className={styles.mint}>INT</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Research Portal for Advanced AI Systems
          </p>
          <div className={styles.heroDescription}>
            <p>Cutting-edge research in artificial intelligence, machine learning, and ethical AI development.</p>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <Brain size={24} color="var(--color-highlight)" />
              <span>AI Research</span>
            </div>
            <VerticalDivider height="30px" />
            <div className={styles.stat}>
              <Cpu size={24} color="var(--color-highlight)" />
              <span>ML Systems</span>
            </div>
            <VerticalDivider height="30px" />
            <div className={styles.stat}>
              <Globe size={24} color="var(--color-highlight)" />
              <span>Global Impact</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhitepapersSection() {
  const sampleWhitepapers = [
    {
      title: "AI Ethics Framework",
      subtitle: "Establishing Ethical Guidelines for AI Development",
      author: "Dr. Sarah Chen",
      date: "2024-01-15",
      category: "AI Ethics",
      tags: ["ethics", "governance", "AI safety", "responsible AI"],
      slug: "whitepapers/2024/ai-ethics-framework"
    },
    {
      title: "Context-Aware Systems",
      subtitle: "Advanced Context Recognition in Modern AI",
      author: "Dr. Michael Roberts",
      date: "2025-02-20",
      category: "Machine Learning",
      tags: ["context awareness", "adaptive systems", "neural networks"],
      slug: "whitepapers/2025/context-aware-systems"
    },
    {
      title: "Neural Architecture Search",
      subtitle: "Automated Design of Deep Learning Models",
      author: "Dr. Lisa Wang",
      date: "2024-11-10",
      category: "Deep Learning",
      tags: ["AutoML", "architecture search", "optimization"],
      slug: "whitepapers/2024/neural-architecture-search"
    }
  ];

  return (
    <section className={styles.whitepapers}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Latest Research</h2>
          <p className={styles.sectionSubtitle}>
            Explore our collection of cutting-edge AI research papers
          </p>
        </div>
        <div className={styles.whitepaperGrid}>
          {sampleWhitepapers.map((paper) => (
            <WhitepaperCard key={paper.slug} {...paper} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="NEOMINT Research Portal - Advanced AI Research and Development">
      <Hero />
      <WhitepapersSection />
    </Layout>
  );
}
