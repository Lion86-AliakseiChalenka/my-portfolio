import React from 'react';
import styles from './Main.module.css';
import photo from './IMG_5122.jpg'
import {Fade} from "react-reveal";

function Main() {
    return (
        <div id='home' className={styles.block}>
            <div className={styles.container}>
                <Fade bottom duration='1000' delay='500'>
                    <div className={styles.greeting}>
            <span>
                Hi There
            </span>
                        <span>
                        I am <span className={styles.pointedOut}>Aliaksei</span> <span
                            className={styles.pointedOut}>Chalenka</span>
            </span>
                        <span>
                        A <span className={styles.pointedOut}>front-end</span> <span
                            className={styles.pointedOut}>developer</span>
            </span>
                    </div>
                    <div className={styles.imgContainer}>
                        <div className={styles.img}>
                            <img className={styles.img} src={photo} alt=""/>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Main;

