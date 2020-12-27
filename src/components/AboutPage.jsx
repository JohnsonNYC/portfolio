import React from 'react';
import { Parallax } from 'react-parallax'

import About from './About'
import Navbar from './Navbar'

import './AboutPage.css'
import background from '../png/About Header.jpg'


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
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>


                    <iframe
                        title='New York City'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/wZMvEpqxrfM"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>

                    <iframe
                        title='Banff'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/nqRTqLxCjcE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                    </iframe>

                    <iframe
                        title='New York City II'
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/fs_wr94vBEc"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            )
        }
    }
    return (
        <div id='AboutPage'>
            <Parallax bgImage={background} strength={300} style={{width: '100%'}}>
                <div id='about-banner'>
                    <Navbar />
                    <div className='about-description-wrapper'>
                        <p id='about-description-text'>Background, Passions, and Expectations</p>
                    </div>
                </div>
            </Parallax>
            <About />
            {hobbiesRender()}
        </div>);
}

export default AboutPage;