import React from 'react';
import { Parallax } from 'react-parallax'

import Navbar from './Navbar'
import HomeBanner from './HomeBanner'
import About from './About'
import Blog from './Blog'
import VideoContainer from './VideoContainer'
import './HomePage.css'
import background from '../png/banner picture.jpg'

const HomePage = () => {
    return (
        <div className='home-page'>
            <Parallax bgImage={background} strength={-300}>
                <div id='banner-wrapper'>
                    <Navbar />
                    <div className='banner'>
                        <HomeBanner />
                    </div>
                </div>
            </Parallax>
            <About/>
            <Blog />
        </div>
    );
}

export default HomePage;