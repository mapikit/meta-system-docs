import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import ScrollSection from '../components/scroll-section.jsx';
import TextCall from '../components/text-call.jsx' 
import ThreeStep from '../components/three-step';
import ImageDescriptionSection from '../components/image-description-section';

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
          Learn More!
        </Link>
      </div>
    </header>
    </ScrollSection >
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Extensible and modular no-code engine, built for everyone, free and open-source.">
      <HomeHero />
      <TextCall />
      <ThreeStep />
      <ImageDescriptionSection
        description="test"
        title="anotherTest"
        imagePath="/img/boiler_plate_illustration.webp"
        direction="row"
        titleColor="orange"
      />
      <main>
      </main>
    </Layout>
  );
}
