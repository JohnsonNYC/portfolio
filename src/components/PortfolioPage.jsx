import React from 'react';
import { Parallax } from 'react-parallax'

import Navbar from './Navbar'
import './PortfolioPage.css'
import background from '../png/Portfolio Header.jpg'

const PortfolioPage = () => {

    return (
        <div id='navbar-page'>
            <Parallax bgImage={background} strength={120}>
                <div id='portfolio-banner'>
                    <Navbar />
                </div>
            </Parallax>
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
                        <div className='project-description-text'>
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
                        <div className='project-description-text'>
                            An online reservation system that aims to mimic AirBNB. With this application, upon sign up, you can a host or a customer.
                            As a host you will be able to create several listings of your space and customizing rates. As a customer, you will be able to
                            reserve a room of your liking for an alloted amount of time. You can edit you reservation or completely delete it if you'd like.
                            Your profile will have you information as both a host and a guest with history logs.
                        </div>
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
                        <div className='project-description-text'>
                            An online reservation system for remote workers, students, or anyone that requires a space to place their laptop to get work done.
                            As a user you will be able to browse through a varitey of cafes throughout nyc that have updates on their seat availability.
                            When you make a reservation, you'll have 10 minutes to get to your destination. After the 10 minute mark, your reservation is withdrawn.
                            This idea was inpsired by my time as a student during university as I could never find a seat, so I'd spend a considerable amount of time
                            searching for a seat instead of getting work done. This app mitigates that time spent looking so that you have all the time to get to the knitty gritty.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PortfolioPage;

