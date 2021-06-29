import React from 'react';
import 'fontsource-archivo-narrow'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faMedium } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const renderSocialHandles = () => {
        if (window.location.pathname === '/about') {
            return (
                <div>
                    <ul >
                        <li>
                            <a href="https://twitter.com/TheJohnsonKow">
                                <FontAwesomeIcon icon={faTwitter} className='social-icon' size="3x" color='#1DA1F2'/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/johnson-kow/" >
                                <FontAwesomeIcon icon={faLinkedin} className='social-icon' size="3x" color='#0072b1'/>
                            </a>
                        </li>
                        <li>
                            <a href="https://johnsonkow.medium.com/">
                                <FontAwesomeIcon icon={faMedium} className='social-icon' size="3x" color='black'/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/JohnsonNYC" >
                                <FontAwesomeIcon icon={faGithub} className='social-icon' size="3x" color='#0cacf4'/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/johnson.nyc/">
                                <FontAwesomeIcon icon={faInstagram} className='social-icon'size="3x" color='#bc2a8d'/>
                            </a>
                        </li>
                    </ul>
                </div>
            )
        }
    }

    const renderCerts = () => {
        if (window.location.pathname === '/about') {
            return (
                <div className='certs-container'>
                    <div className='certs'>
                        <a className='badge-link' href={'https://www.youracclaim.com/badges/f6315f41-1479-4138-bd0f-04c473cb6644/public_url'} target='_blank' rel='noopener noreferrer'>
                            <img className='AWS-badge' src={require("../png/aws-certified-cloud-practitioner.png")} alt='AWS Badge' />
                        </a>
                        <span className='cert-description' id='AWS-badge-description'> Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects. </span>
                    </div>
                    <div className='certs'>
                        <a className='badge-link' href={'https://flatironschool.com/career-courses/coding-bootcamp'} target='_blank' rel='noopener noreferrer'>
                            <img className='AWS-badge' src={require("../png/flatironschoolbadge.png")} alt='Flatiron School Badge' />
                        </a>
                        <span className='cert-description' id='FI-badge-description'> Earners of the software engineering certificate have done much more than simply build technical skills: they have maintained technical blogs to show they can credibly talk tech; they have become a part of the tech community; they have amassed an impressive portfolio of unique, functional web applications to show employers as they enter the job-search phase with the support of our Career Services team. </span>
                    </div>
                </div>
            )
        }
    }
    return (
        <div className='about'>
            <div className='subtitle'>
                About Me:
            </div>

            <div className='about-text-picture'>
                <div className='vl'></div>
                <div className='about-text-container'>
                    <p className='about-text'> HELLO THERE! I'M JOHNSON KOW, A SOFTWARE ENGINEER BASED OUT OF NEW YORK CITY.</p>
                    <p className='about-text'> I ENJOY BUILDING FULLSTACK APPLICATIONS AND WEBSITES FROM START TO END. I CREATE BEAUTIFUL FRONTEND DESIGNS FOR A SMOOTH USER EXPERIENCE AND CREATE THE ARCHITECTURE AND LOGIC FOR THE BACKEND. MY GOAL IS TO BUILD APPEALING APPLICATIONS THAT ARE INTUITIVE TO USE.</p>
                    <p className='about-text'> I STUDIED AT SYRACUSE UNIVERSITY UNDER THE MECHANICAL ENGINEERING PROGRAM. I BECAME A PROJECT ENGINEER AND PROJECT MANAGER FOR A SMALL BUSINESS THAT SPECIALIZES IN MATERIAL DURABILITY. MY CURIOSITIES WITHIN THE SOFTWARE ENGINEERING DISCIPLINE LED ME TO THE FLATIRON SCHOOL WHERE I BECAME A CERTIFIED SOFTWARE ENGINEER.</p>
                    <p className='about-text'> I'M INSPIRED BY VARIOUS ART MEDIUMS AND CONSIDER WEB DEVLEOPLMENT AS ANOTHER PLATFORM TO EXPRESS VISUAL ART. THE PHOTOS USED FOR THIS WEBSITE WERE TAKEN BY YOURS TRULY.</p>
                    <p className='about-text'> MY STACK INCLUDES JAVASCRIPT, REACT.JS, AND RUBY ON RAILS. </p>
                </div>
                <div className='portrait'>
                    <img className='portrait' src={require("../png/Johnson-01378.jpg")} alt='Portrait' />
                </div>
            </div>
            {renderCerts()}
            {renderSocialHandles()}
        </div>
    );
}

export default About;