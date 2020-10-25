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
                    <div className='project-description'>
                        <h2><strong>Picology </strong></h2>
                        <div classname='project-description-text'> 
                            An ecommerce website where users can buy digital prints from their favorite artists. 
                            Users will be able to browse through the collection of digital prints through the search bar or through filter.
                            Users have a cart that can hold a varity of prints of various quantities and checkout their products.
                            This application was inpsired by my mutual interest of photography and drones with my project partner. 
                        </div>
                    </div>
                </div> 
                <div className='project-summary'>
                    <iframe
                        title='Travel Rails'
                        src="https://www.youtube.com/embed/AUwPwo0MrgE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <div className='project-description'>
                        <p><strong> Travel Rails </strong></p>
                    </div>
                </div>

                <div className='project-summary'>
                    <iframe
                        title='Study Beans'
                        src="https://www.youtube.com/embed/UjEURK5LSIo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                    <div className='project-description'>
                        <p> <strong>Study Beans</strong> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;

