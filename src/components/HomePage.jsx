import React from 'react';
import { Parallax } from 'react-parallax'

//Components 
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
            <Parallax bgImage={background} strength={500}>
                <div id='banner-wrapper'>
                    <Navbar />
                    <div className='banner'>
                        <HomeBanner />
                    </div>
                </div>
            </Parallax>
            <About />
            <Blog />
            <VideoContainer />
        </div>
    );
}

export default HomePage;