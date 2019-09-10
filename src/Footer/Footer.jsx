import React from 'react';
import styles from './Footer.module.css';
import linkedinIcon from './linkedin.svg'
import telegramIcon from './telegram.svg'
import vkIcon from './vk.svg'
import Link from "./Link";
import {Fade} from "react-reveal";


function Footer() {
    return (
        <div className={styles.block}>
            <div className={styles.container}>
                <Fade bottom duration='1000' delay='500'>
                    <span>Aliaksei Chalenka</span>
                    <div className={styles.links}>
                        <Link icon={<img src={linkedinIcon} alt=""/>}/>
                        <Link icon={<img src={telegramIcon} style={
                            {height: '20px', width: '20px'}}
                                         alt=""/>}/>
                        <Link icon={<img src={vkIcon} alt=""/>}/>
                    </div>
                    <span>{String.fromCharCode(169)} 2019 All rights reserved</span>
                </Fade>
            </div>
        </div>
    );
}

export default Footer;
