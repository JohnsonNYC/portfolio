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
                <div className='project-summary'>
                    <iframe
                        title="Picology"
                        src="https://www.youtube.com/embed/Bow4BPYAJlg"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <p>Description 1</p>
                </div>
                <div className='project-summary'>
                    <iframe
                        title='Travel Rails'
                        src="https://www.youtube.com/embed/AUwPwo0MrgE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <p> Description 2 </p>
                </div>

                <div className='project-summary'>
                    <iframe
                        title='Study Beans'
                        src="https://www.youtube.com/embed/UjEURK5LSIo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <p> Description 3 </p>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;

