import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import ScrollSection from '../components/scroll-section.jsx';

function HomeHero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <ScrollSection>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles['container']}>
        <div className={styles['main-logo']}> <div className={styles['actual-logo']}/> </div>
        <h1 className={"hero__title " + styles.title}>{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/api-docs/getting-started">
          Get To Know Us!
        </Link>
      </div>
    </header>
    </ScrollSection >
  );
}

function ConcreteSection() {
  return (
    <ScrollSection>
      <div>
        test 
      </div>
    </ScrollSection>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Extensible and modular no-code engine, built for everyone, free and open-source.">
      <HomeHero />
      <ConcreteSection />
      <main>
      </main>
    </Layout>
  );
}
