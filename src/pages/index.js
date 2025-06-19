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
            Cybersecurity is our origin. AI our passion. Open source our commitment.
          </p>
          <div className={styles.heroDescription}>
            <p className={styles.heroTagline}>Strategic knowledge from practice, for practice. Free. Clear. Citable.</p>
            <p>1/3 of our time dedicated to open research, frameworks, and real-world insights.</p>
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
      title: "Zero Trust Architecture in AI Systems",
      subtitle: "Implementing Security-First Design for Autonomous Systems",
      author: "NEOMINT Research Team",
      date: "2024-01-15",
      category: "Cybersecurity",
      tags: ["zero trust", "security architecture", "AI safety", "system design"],
      slug: "whitepapers/2024/ai-ethics-framework",
      format: "framework",
      depth: "deep"
    },
    {
      title: "Ethics-Driven Development Framework",
      subtitle: "From Compliance to Conviction in AI Development",
      author: "NEOMINT Research Team",
      date: "2025-02-20",
      category: "AI Ethics",
      tags: ["responsible AI", "development framework", "ethical design", "governance"],
      slug: "whitepapers/2025/context-aware-systems",
      format: "framework",
      depth: "expert"
    },
    {
      title: "Resilient System Architecture Patterns",
      subtitle: "Building Anti-Fragile AI Infrastructure at Scale",
      author: "NEOMINT Research Team",
      date: "2024-11-10",
      category: "System Architecture",
      tags: ["resilience", "scalability", "infrastructure", "best practices"],
      slug: "whitepapers/2024/neural-architecture-search",
      format: "whitepaper",
      depth: "deep"
    }
  ];

  return (
    <section className={styles.whitepapers}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>From Practice, For Practice</h2>
          <p className={styles.sectionSubtitle}>
            Knowledge that matters - tested in real environments, shared openly
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
      description="NEOMINT Research Portal - Strategic knowledge from practice, for practice">
      <Hero />
      <WhitepapersSection />
    </Layout>
  );
}
