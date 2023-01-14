import React from 'react';
import styles from './LastVersionReleased.module.css';

export default function HomepageFeatures() {
  return (
    <div className={styles.wipWarning}>
      <p> Get ready to go beyond with our newest release, v0.3 'Mercury' - It's here and it's better than ever! </p>
      <a className={styles.link} href='https://github.com/mapikit/meta-system/blob/master/CHANGELOG.md'>Check out what's new </a>
    </div>
  );
}