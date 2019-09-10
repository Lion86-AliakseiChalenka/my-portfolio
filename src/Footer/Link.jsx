import React from 'react';
import styles from './Link.module.css';

function Link (props) {
    return (
        <div className={styles.link}>
            {props.icon}
        </div>
    );
}

export default Link;
