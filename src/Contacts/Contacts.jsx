import React from 'react';
import styles from './Contacts.module.css'
import ContactsForm from "./ContactsForm";
import stylesApp from './../App.module.css';
import Button from './../Common/Button';
import {Fade} from "react-reveal";

function Contacts() {
    return (
        <div id='contacts' className={styles.block}>
            <div className={styles.container}>
                <Fade bottom duration='1000' delay='500'>
                    <div className={stylesApp.title}>
                    <span>
                        Contacts
                    </span>
                    </div>
                    <div className={styles.formbutton}>
                    <ContactsForm/>
                    <Button name={'Send message'}/>
                    </div>
                </Fade>
            </div>
        </div>

    );
}

export default Contacts;
