import React from 'react';
import Navbar from './Navbar'
import HomeBanner from './HomeBanner'
import './Home.css'

const Home = () => {
    return (
        <div className='home-wrapper'>
                <Navbar />
            <div className='banner'>
                <HomeBanner />
            </div>
        </div>
    );
}

export default Home;