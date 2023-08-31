import React from "react";
import styles from "./text-call.module.css"; 
import ScrollSection from "./scroll-section";

export default function ConcreteSection() {
  return (
    <ScrollSection>
      <div className={styles['text-call-container']}>
        <div className={styles['text-call']}>
          <h3> Meta-System is </h3>
          <h1> An extensible and modular <span>no-code engine</span>,<br/> built for everyone, free and open-source. </h1>
          <p className={styles['paragraph']}>
          Meta-System frees you, the <span> developer</span>, to work on <br/> what makes your software truly unique.
          </p>
          {/*<p> Without restricting functionality, Meta-System's architecture provides an <span>extensible</span> and <span>completely</span> modular environment. </p>*/}
        </div> 
        <div className={styles['logo-container']} >
          <div className={styles['big-logo']} />
        </div>
        <div className={styles['bg-container']}>
          <div className={styles['bg-graph']}/>
          <div className={styles['gradient']}/>
        </div>
      </div>
    </ScrollSection>
  )
}

