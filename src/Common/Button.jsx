import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return (
        <span className={styles.button}>{props.name}</span>
    );
}

export default Button;
