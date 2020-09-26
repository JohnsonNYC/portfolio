import React from 'react';
import Navbar from './Navbar'
import HomeBanner from './HomeBanner'
import About from './About'
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
        </div>
    );
}

export default Home;