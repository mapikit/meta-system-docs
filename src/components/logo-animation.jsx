import React, {useEffect, useRef} from "react";
import anime from "animejs/lib/anime.es.js";
import styles from "./logo-animation.module.css";

function MetaSystemLogo ({ onComplete }) {
  const animation = useRef(null);
  const animationMainShadow = useRef(null);
  const containerIntro = useRef(null);
  const drop1 = useRef(null);
  const drop2 = useRef(null);
  const drop3 = useRef(null);
  const containerOutro = useRef(null);
  const nameAnimation = useRef(null);
  
  useEffect(() => {
    drop1.current = anime({
      targets: "#drop1",
      opacity: [0, 1],
      scale: [0.5, 1],
      delay: 2700,
      duration: 500,
      easing: "easeOutQuint"
    });
    
    drop2.current = anime({
      targets: "#drop2",
      opacity: [0, 1],
      scale: [0.5, 1],
      delay: 2000,
      duration: 500,
      easing: "easeOutQuint"
    });
    drop3.current = anime({
      targets: "#drop3",
      opacity: [0, 1],
      scale: [0.5, 1],
      delay: 3300,
      duration: 500,
      easing: "easeOutQuint"
    });
    
    containerIntro.current = anime({
      targets: "#main-animation",
      opacity: [0, 1],
      scale: [0.5, 1],
      delay: 500,
      duration: 500,
      easing: "easeOutQuint"
    });

    containerOutro.current = anime({
      targets: "#main-animation",
      keyframes: [
        { scale: 1, opacity: 1, easing: "easeInOutQuad" },
        { scale: 0.9, opacity: 1, duration: 1300, delay: 2300, easing: "easeInOutQuart" },
        { scale: 1.1, opacity: 1,duration: 400, easing: "easeInOutQuart" },
        { scale: 1, opacity: 1, duration: 1500, easing: "easeOutQuint" },
        { scale: 0.75, opacity: 0, duration: 800, delay: 1000, easing: "easeInCubic"}
      ],
    });

    if (onComplete) {
      containerOutro.current.finished.then(onComplete);
    }

    nameAnimation.current = anime({
      targets: `.${styles["name"]}`,
      keyframes: [
        { opacity: 0, scale: 0.7, translateY: -100, easing: "easeInOutQuad" },
        { opacity: 1, scale: 1, translateY: 0, easing: "easeOutBack", delay: 3450, duration: 1200 }
      ]
    });

    animation.current = anime({
      targets: "#main-line",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutQuad",
      duration: 2500,
      delay: 1500,
      direction: "forward",
      loop: false
    });

    animationMainShadow.current = anime({
      targets: ["#main-line-back", ".shadow"],
      opacity: [0, 0.4],
      easing: "easeInOutQuad",
      duration: 800,
      delay: 1000,
      direction: "forward",
      loop: false
    });
  }, []);

  return ( <div id="main-animation" className={styles["svg-container"]}>
    <svg width="32.673mm" height="23.385mm" version="1.1" viewBox="0 0 32.673 23.385" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(-415.74 -257.13)">
        <path id="main-line-back" d="m438.43 279.87-1.1576-10.448c-5e-5 -1.9264 0.05-3.9182 1.289-5.1572 0.5807-0.58075 1.2664-0.81074 1.9252-0.81074 0.7467 7e-3 1.4585 0.32641 1.9428 0.81074 0.91176 0.9118 1.2225 2.6459 0 3.8684-1.0315 1.0315-2.936 1.0156-5.157 1.2888-1.9385 0.16783-3.4765 0.25827-5.196 0.25827s-3.2575-0.0904-5.196-0.25827c-2.221-0.2732-4.1255-0.25727-5.157-1.2888-1.2225-1.2225-0.91176-2.9566 0-3.8684 0.48433-0.48433 1.1961-0.80374 1.9428-0.81074 0.65878 0 1.3445 0.22999 1.9252 0.81074 1.239 1.239 1.289 3.2308 1.289 5.1572l-1.1576 10.448" fill="none" stroke="#ffffff2f" strokeLinecap="round" strokeLinejoin="round"/>
        <path id="main-line" d="m438.43 279.87-1.1576-10.448c-5e-5 -1.9264 0.05-3.9182 1.289-5.1572 0.5807-0.58075 1.2664-0.81074 1.9252-0.81074 0.7467 7e-3 1.4585 0.32641 1.9428 0.81074 0.91176 0.9118 1.2225 2.6459 0 3.8684-1.0315 1.0315-2.936 1.0156-5.157 1.2888-1.9385 0.16783-3.4765 0.25827-5.196 0.25827s-3.2575-0.0904-5.196-0.25827c-2.221-0.2732-4.1255-0.25727-5.157-1.2888-1.2225-1.2225-0.91176-2.9566 0-3.8684 0.48433-0.48433 1.1961-0.80374 1.9428-0.81074 0.65878 0 1.3445 0.22999 1.9252 0.81074 1.239 1.239 1.289 3.2308 1.289 5.1572l-1.1576 10.448" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeDasharray={0} strokeDashoffset={1000000}/>
        <path className="shadow" d="m432.08 257.13c-0.81516 0-1.7293 0.62155-1.7293 1.7292s1.1545 2.8817 1.7293 2.8817c0.57474 0 1.7293-1.7886 1.7293-2.8817 0-1.0931-0.9141-1.7292-1.7293-1.7292z" fill="#ffffff2f"/>
        <path className="shadow" d="m448.18 278.21c0.40758-0.70595 0.32636-1.8084-0.63294-2.3622-0.9593-0.55385-3.0729-0.44103-3.3603 0.0567-0.28737 0.49774 0.68433 2.3919 1.631 2.9385 0.94667 0.54656 1.9546 0.073 2.3622-0.63299z" fill="#ffffff2f"/>
        <path className="shadow" d="m415.97 278.21c-0.40758-0.70595-0.32636-1.8084 0.63294-2.3622 0.9593-0.55385 3.0729-0.44103 3.3603 0.0567 0.28737 0.49774-0.68433 2.3919-1.631 2.9385-0.94667 0.54656-1.9546 0.073-2.3622-0.63299z" fill="#ffffff2f"/>
        <path id="drop1" d="m432.08 257.13c-0.81516 0-1.7293 0.62155-1.7293 1.7292s1.1545 2.8817 1.7293 2.8817c0.57474 0 1.7293-1.7886 1.7293-2.8817 0-1.0931-0.9141-1.7292-1.7293-1.7292z" fill="#3cf691"/>
        <path id="drop2" d="m448.18 278.21c0.40758-0.70595 0.32636-1.8084-0.63294-2.3622-0.9593-0.55385-3.0729-0.44103-3.3603 0.0567-0.28737 0.49774 0.68433 2.3919 1.631 2.9385 0.94667 0.54656 1.9546 0.073 2.3622-0.63299z" fill="#3cf691"/>
        <path id="drop3" d="m415.97 278.21c-0.40758-0.70595-0.32636-1.8084 0.63294-2.3622 0.9593-0.55385 3.0729-0.44103 3.3603 0.0567 0.28737 0.49774-0.68433 2.3919-1.631 2.9385-0.94667 0.54656-1.9546 0.073-2.3622-0.63299z" fill="#3cf691"/>
      </g>
    </svg>
      <h1 className={styles["name"]}> Meta-System </h1>
    </div>
  );
}


export default function logoAnimation ({ onComplete }) {
  const containerAnimation = useRef(null);

  useEffect(() => {
    containerAnimation.current = anime({
      targets: `.${styles['animation-container']}`,
      keyframes: [
        { opacity: 1, easing: "easeInCubic" },
        { opacity: 1, delay: 7200, easing: "easeOutCubic" },
        { opacity: 0, duration: 500, easing: "easeOutQuint" }
      ],
    });
  }, [])

  return (
    <div className={styles['animation-container']}>
      <MetaSystemLogo
        onComplete={onComplete}
      />
    </div>
  )
}
