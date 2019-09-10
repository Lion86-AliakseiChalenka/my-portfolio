import React from 'react';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.block}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <a href="#home" className={styles.button}>
                        Home
                    </a>
                    <a href="#skills" className={styles.button}>
                        Skills
                    </a>
                    <a href="#project" className={styles.button}>
                        Projects
                    </a>
                    <a href="#contacts" className={styles.button}>
                        Contacts
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
