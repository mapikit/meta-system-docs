import clsx from 'clsx';
import React from 'react';
import styles from './scroll-section.module.css';

export default function ScrollSection (props) {
  return (
    <div className={clsx(styles['scroll-section'], props['overflowed'])}>
      {props.children}
    </div>
  )
}

