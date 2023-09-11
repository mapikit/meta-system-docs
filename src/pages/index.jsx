import React, {useContext, useEffect, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import ScrollSection from '../components/scroll-section.jsx';
import TextCall from '../components/text-call.jsx' 
import ThreeStep from '../components/three-step';
import ImageDescriptionSection from '../components/image-description-section';
import PurposeDrivenSection from '../components/purpose-driven-section';
import LogoAnimation from '../components/logo-animation';
import { PageContext } from '../contexts';

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

function Body ({ setAnimationPlayed }) {
  const [ animationStatus, setAnimation ] = useState("initialized");
  const { animationPlayed } = useContext(PageContext);

  const animationElement = (animationStatus === "initialized") && !animationPlayed ? (
    <LogoAnimation
      onComplete={() => { setAnimation("complete"); setAnimationPlayed(true); }}
    />
  ) : null;

  useEffect(() => {
    const page = document.getElementsByTagName("html")[0];
    if (animationPlayed) {
      page.style.overflow = 'unset';
    } else {
      window.scrollTo(0,0);
      page.style.overflow = 'hidden';
    }
  }, [ animationPlayed ])

  return (
    <>
      {animationElement}
      <HomeHero />
      <TextCall />
      <ThreeStep />
      <ImageDescriptionSection
        description="Meta-System handles the heavy lifting of structuring and connecting your software components, ensuring you can effortlessly compose entire systems without ever worrying about intricate software architecture. And it's incredibly easy to get started."
        title="Instant Architecture, Zero Hassle"
        imagePath="/img/boiler_plate_illustration.webp"
        direction="text-first"
        titleColor="red"
      />
      <ImageDescriptionSection
        description="You can add new functionality to your system by using compatible NPM libraries, or even create your own novel solution. All of this without re-building the core."
        title="Modular and Extensible"
        imagePath="/img/modular_and_extensible_illustration.webp"
        direction=""
        titleColor="orange"
      />
      <PurposeDrivenSection />
      <ImageDescriptionSection
        description="Anyone can use, contribute, or even review Meta-System's code free of charge, forever. Meta-System is built for you, by you."
        title="Free and Open Source"
        imagePath="/img/open_source_illustration.webp"
        titleColor="green"
        direction="text-first"
      />
      <main>
      </main>
    </>

  );

}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [ animationPlayed, setAnimationPlayed ] = useState(false);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Extensible and modular no-code engine, built for everyone, free and open-source.">
      <PageContext.Provider value={{ animationPlayed }}>
        <Body setAnimationPlayed={setAnimationPlayed}/>
      </PageContext.Provider>
    </Layout>
  );
}
