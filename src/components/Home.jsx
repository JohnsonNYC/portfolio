import React from 'react';

//Components 
import Navbar from './Navbar'
import HomeBanner from './HomeBanner'
import About from './About'
import Blog from './Blog'
import VideoContainer from './VideoContainer'
import './Home.css'

const Home = () => {
    return (
        <div className='home-page'>
            <div id='banner-wrapper'>
                <Navbar />
                <div className='banner'>
                    <HomeBanner />
                </div>
            </div>
            <About />
            <Blog />
            <VideoContainer />
        </div>
    );
}

export default Home;