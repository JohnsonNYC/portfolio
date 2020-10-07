import React from 'react';
import Navbar from './Navbar'
import './PortfolioPage.css'

const PortfolioPage = () => {
    
    return (
        <div id='navbar-page'>
            <div id='portfolio-banner'>
                <Navbar />
            </div>
            <div className='video-container'>
                <div id='blog-header' className='subtitle'> Projects </div>
                <iframe
                    title="Picology"
                    src="https://www.youtube.com/embed/Bow4BPYAJlg"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <iframe
                    title='Travel Rails'
                    src="https://www.youtube.com/embed/AUwPwo0MrgE"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <iframe
                    title='Study Beans'
                    src="https://www.youtube.com/embed/UjEURK5LSIo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    );
}

export default PortfolioPage;