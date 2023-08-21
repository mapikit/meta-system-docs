import React from 'react';
import styles from './LastVersionReleased.module.css';

export default function HomepageFeatures() {
  return (
    <div className={styles.wipWarning}>
      <p> v0.4 'Andromeda' is right around the corner! </p>
      <a className={styles.link} href='https://github.com/mapikit/meta-system/blob/master/CHANGELOG.md'>Check out what's new </a>
    </div>
  );
}