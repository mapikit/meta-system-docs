import Link from "@docusaurus/Link";
import clsx from "clsx";
import React from "react";
import styles from "./purpose-driven-section.module.css";
import ScrollSection from "./scroll-section";

export default function () {
  return (
    <ScrollSection overflowed='overflowed'>
      <div className={styles["container"]}>
        <div className={styles["texts"]}>
          <h1> Purpose Driven </h1>
          <p> With Meta-System you don't need to fight with the code, just develop your system guided by the problems you want to solve! </p>
        </div>
        <div className={styles["illustrations"]}/>
        <Link
          className={clsx("button button--secondary button--lg", styles['button-position'])}
          to="/docs/api-docs/getting-started">
          Start Building
        </Link>
      </div>
    </ScrollSection>
  )
}
