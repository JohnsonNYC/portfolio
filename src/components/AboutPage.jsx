import React from 'react';
import About from './About'
import Navbar from './Navbar'

import './AboutPage.css'
const AboutPage = () => {
    return (
        <div id='AboutPage'>
            <div id='about-banner'>
                <Navbar />
            </div>
            <About />
        </div>);
}

export default AboutPage;