import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import clsx from "clsx";
import React from "react";
import ScrollSection from "./scroll-section";
import styles from "./supporter-section.module.css";

function Slot () {
  const style = {
    "width": '18em',
    "height": '10em',
    "backgroundSize": 'contain',
    "backgroundRepeat": 'no-repeat',
    "backgroundImage": `url(${useBaseUrl("/img/sponsor_slot.webp")})`,
  } // Don't ask me, for some reason i couldn't use the css
    // or it would gloriously crash.
  
  return (<div className={styles["slot"]} style={style} />)
}

export default function SupporterSection () {
  return (
    <ScrollSection>
      <div className={styles["background"]}>
        <div className={styles["texts"]}>
          <h1> You'll be in Good Company </h1>
          {/* Change the text when we have sponsors! :) */}
          <p> Love it so far? Consider supporting Meta-System and claim a spot below.  </p>
          <span> (And in our hearts) </span>
        </div>
        <div className={styles["sponsor-slots"]}>
          <Slot />
          <Slot />
          <Slot />
        </div>
        <Link
          className={clsx("button button--secondary button-lg", styles['button-position'])}
          to="https://opencollective.com/meta-system-engine">
          Consider Supporting
        </Link>
      </div>
    </ScrollSection>
  )
}
