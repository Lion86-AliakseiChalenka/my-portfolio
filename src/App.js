import React from 'react';
import styles from './App.module.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Footer from "./Footer/Footer";
import Contacts from "./Contacts/Contacts";
import Particles from 'react-particles-js';


function App() {
    return (
        <div className={styles.app}>
            <Header/>
            <Particles className={styles.particles}
                       params={{
                           "particles": {
                               "number": {
                                   "value": 70
                               },
                               "size": {
                                   "value": 2
                               },
                               'move': {
                                   'speed': 1
                               }
                           }
                       }}/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
