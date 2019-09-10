import React from 'react';
import styles from './Projects.module.css';
import stylesApp from './../App.module.css'
import Button from "../Common/Button";
import {Fade} from "react-reveal";

function Projects() {
    return (
        <div id='project' className={styles.block}>
            <div className={styles.container}>
                <Fade bottom duration='1000' delay='500'>
                        <div className={stylesApp.title}>
                    <span>
                        My projects
                    </span>
                        </div>
                        <div className={styles.projects}>
                            <div className={styles.project}>
                                <div className={styles.projectPic}>
                                    <Button name={'See more'}/>
                                </div>
                                <div className={styles.projectInformation}>
                                    <div className={styles.projectName}>
                                        Project Name
                                    </div>
                                    <div className={styles.projectName}>
                                        Project Description
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projects}>
                            </div>
                        </div>
                    </Fade>
            </div>
        </div>
);
}

export default Projects;
