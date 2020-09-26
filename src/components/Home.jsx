import React from 'react';

//Components 
import Navbar from './Navbar'
import HomeBanner from './HomeBanner'
import About from './About'
import Blog from './Blog'
import './Home.css'

const Home = () => {
    return (
        <div className='home-page'>
            <div className='banner-wrapper'>
                <Navbar />
                <div className='banner'>
                    <HomeBanner />
                </div>
            </div>
            <About />
            <Blog />
        </div>
    );
}

export default Home;