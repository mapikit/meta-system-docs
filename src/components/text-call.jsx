import React from "react";
import styles from "./text-call.module.css"; 
import ScrollSection from "./scroll-section";

export default function ConcreteSection() {
  return (
    <ScrollSection>
      <div className={styles['text-call-container']}>
        <div className={styles['text-call']}>
          <h2> Meta-System is </h2>
            <h1> An extensible and modular <span>no-code engine</span>,<br/> built for everyone, free and open-source. </h1>
        </div> 
      </div>
    </ScrollSection>
  )
}

