import React from 'react';
import styles from './Skill.module.css';


function Skill (props) {
    return (
                  <div className={styles.skill}>
                        <div className={styles.skillLogo}>
                                {props.icon}
                        </div>
                        <div className={styles.skillDiscription}>'ghfhfghhthr thrturtyyr tyrty
                            utyut utyujgyjg fhjghjgh ghjghjgh rtutyutyuj tuiytukyuk ryjutyjghkj
                            dfhdgh'</div>
                    </div>
    );
}

export default Skill;
