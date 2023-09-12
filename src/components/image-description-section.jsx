import clsx from "clsx";
import React from "react";
import styles from "./image-description-section.module.css";
import ScrollSection from "./scroll-section";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function ({direction, imagePath, title, titleColor, description}) {
  const imgSource = useBaseUrl(imagePath);
  
  return (
    <ScrollSection>
      <div className={clsx(styles['container'], styles[direction])}>
        <div className={styles['image-container']}>
          <img src={imgSource} className={styles['image']} />
        </div>
        <div className={styles['spacer']} />
        <div className={styles['texts']}>
          <h1 className={clsx(styles['title'], styles[titleColor])}> {title} </h1>
          <p> {description} </p>
        </div>
      </div>
    </ScrollSection>
  )
}


