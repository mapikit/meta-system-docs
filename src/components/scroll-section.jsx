import React from 'react';
import styles from './scroll-section.module.css';

export default function ScrollSection (props) {
  return (
    <div className={styles['scroll-section']}>
      {props.children}
    </div>
  )
}

