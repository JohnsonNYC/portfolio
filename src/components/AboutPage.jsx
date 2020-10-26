import React from 'react';
import About from './About'
import Navbar from './Navbar'

import './AboutPage.css'
const AboutPage = () => {
    const hobbiesRender = () => {
        if (window.location.pathname === '/about') {
            return (
                <div className='hobbies'>
                    <h2>Hobbies & Interest</h2>
                    <iframe
                        title='drone hobby'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/fQSfbvDSCFA"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>

                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/wZMvEpqxrfM"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
            )
        }
    }
    return (
        <div id='AboutPage'>
            <div id='about-banner'>
                <Navbar />
            </div>
            <About />
            {hobbiesRender()}
        </div>);
}

export default AboutPage;