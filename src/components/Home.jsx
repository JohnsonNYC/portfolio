import React, { Component } from 'react';
import Navbar from './Navbar'
import './Home.css'
const Home = () => {
    return (
        <div className='home-wrapper'>
            <div className='banner'>
                <Navbar />
                <div className='description-wrapper'>
                        {/* try to get description 1 to be of font family Bebas Neue Pro */}
                        <p id='description-1'><strong> Hello I'm Johnson Kow </strong></p>
                        <p>For the past year, I've been honing my skills as a fullstack developer.</p>
                        <p></p>
                </div>

            </div>
        </div>
    );
}

export default Home;