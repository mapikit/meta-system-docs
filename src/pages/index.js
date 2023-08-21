import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import LastVersionReleased from '../components/LastVersionReleased';
const SVGLogo = require('../../static/img/logo_metasystem.svg').default;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <SVGLogo />
        <h1 className={"hero__title " + styles.title}>{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/api-docs/getting-started">
            Let's get started!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Extensible and modular no-code engine, built for everyone, free and open-source.">
      <HomepageHeader />
      <main>
        <LastVersionReleased />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
