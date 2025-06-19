import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import WhitepaperCard from '@site/src/components/WhitepaperCard';
import VerticalDivider from '@site/src/components/VerticalDivider';
import styles from './index.module.css';

function Hero() {
  return (
    <div className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <img src="/img/thumbnail_white.png" alt="NEOMINT" className={styles.heroThumbnail} />
          <h1 className={styles.heroTitle}>
            NEOMINT-RESEARCH
          </h1>
        </div>
      </div>
    </div>
  );
}

function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <div className="container">
        <div className={styles.missionContent}>
          <h2 className={styles.missionSubtitle}>
            Cybersecurity is our origin. AI our passion. Open source our commitment. Research our way.
          </h2>
          <h3 className={styles.missionContentTitle}>Warum wir veröffentlichen – und für wen.</h3>
          <div className={styles.missionText}>
            <p>
              In einer Welt voller Buzzwords, Whitepaper-Worthülsen und Sicherheitsversprechen glauben wir an etwas anderes: <strong>Zugängliches Denken. Klare Argumente. Echte Verantwortung.</strong> NEOMINT-RESEARCH ist unser Beitrag zur digitalen Resilienz. Wir veröffentlichen Gedanken, Modelle und Analysen, die sonst nur in geschlossenen Projekten oder vertraulichen Präsentationen existieren – um sie der Allgemeinheit verfügbar zu machen. Denn wer entscheidet, gestaltet. Und wer gestaltet, sollte verstehen. Ob du CISO bist, Entwickler:in, Forscher:in oder einfach jemand, der die richtigen Fragen stellt – hier findest du Texte, die nicht überzeugen wollen, sondern helfen. Ohne Anmeldung. Ohne Paywall. Ohne Filter – aber mit Haltung.
            </p>
          </div>
        </div>
      </div>
    </section>
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
          <h2 className={styles.sectionTitle}>Lösungen mit Methode</h2>
          <p className={styles.sectionSubtitle}>
            Entwickelt in der Praxis, verifiziert im Labor, optimiert in der Forschung
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
      <MissionSection />
      <WhitepapersSection />
    </Layout>
  );
}
