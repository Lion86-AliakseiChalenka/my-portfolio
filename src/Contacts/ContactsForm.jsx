import React from 'react';
import styles from './Contacts.module.css';
import {Field, reduxForm} from 'redux-form';


function ContactsForm(props) {
    return (
        <div className={styles.form}>
            <div className={styles.name}>
                <input type={'text'} name={'Name'} placeholder={'Name'} />
            </div>
            <div className={styles.email}>
                <input type={'Email'} name={'Email'} placeholder={'Email'} />
            </div>
            <div>
                <textarea name={'textarea'} placeholder={'Your message'}/>
                <submit name={'submit'}/>
            </div>
        </div>
    );
}

export default ContactsForm;
