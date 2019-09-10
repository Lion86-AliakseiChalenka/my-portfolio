import React from 'react';
import styles from './Skills.module.css';
import reactIcon from './reactIcon.svg'
import stylesApp from './../App.module.css'
import jsIcon from './jsIcon.svg'
import htmlIcon from './htmlIcon.svg'
import Skill from "./Skill";
import {Fade} from "react-reveal";


function Skills() {
    return (
        <div id='skills' className={styles.block}>
            <div className={styles.container}>
                <Fade bottom duration='1000' delay='500'>
                <div className={stylesApp.title}>
                    <span>
                        My skills
                    </span>
                </div>
                <div className={styles.skills}>
                        <Skill icon={<img src={reactIcon} alt="" />}/>
                        <Skill icon={<img src={jsIcon} alt="" />}/>
                        <Skill icon={<img src={htmlIcon} alt="" />}/>
                </div>
                </Fade>
            </div>
        </div>
    );
}

export default Skills;
