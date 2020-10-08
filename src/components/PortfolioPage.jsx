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
                        <p><strong>Picology </strong></p>
                        {/* <p className='description-line'>
                            Picology is an online ecommerce website for users to purchase photographic prints.
                            The user is able to browse images and specify keyword for their search.
                            Users can add pictures to their cart and update the quantity for each product.
                            Website will require user to login and fill address form for delivery purposes.
                        </p> */}
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

