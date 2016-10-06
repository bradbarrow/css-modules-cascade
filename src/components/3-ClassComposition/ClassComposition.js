import React, { Component } from 'react';

import styles from './ClassComposition.css';
import StyleVariantA from './StyleVariantA/StyleVariantA';
import StyleVariantB from './StyleVariantB/StyleVariantB';

export default class ClassComposition extends Component {

  render() {
    return (
      <div>
        <StyleVariantA className={`${styles.custom} ${styles.customTwo} ${styles.customThree}`} />
        <br />
        <StyleVariantB />
      </div>
    );
  }

};
