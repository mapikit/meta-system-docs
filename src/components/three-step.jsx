import React from "react";
import ScrollSection from "./scroll-section";
import styles from "./three-step.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';

export default function ThreeStep () {
  const steps = [
    { text: "Import your JSON config", icon: useBaseUrl("/img/config_icon.webp") },
    { text: "Launch your system", icon: useBaseUrl("/img/launch_system_icon.webp") },
    { text: "Your software is up and running!", icon: useBaseUrl("/img/system_ready_icon.webp") }
  ]

  return (
    <ScrollSection>
      <div className={styles['container']}>
        <div className={styles['container-inner']}>
          <div className={styles['texts']}>
            <h1> Just as simple as: </h1>
            <div className={styles['steps']}>
              {steps.map((step, ind) => (
                <div className={styles['step']} key={ind}>
                  <img src={step.icon}/>
                  <p> {step.text} </p>
                </div>
              ))}
            </div>
            <Link
              className="button button--secondary button--lg"
              to="/docs/api-docs/getting-started">
              Try it out!
            </Link>
          </div>
          <div className={styles['background-image']} />
        </div>
      </div>
    </ScrollSection>
  )
};

