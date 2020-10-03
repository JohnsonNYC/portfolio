import React from 'react';
import 'fontsource-archivo-narrow'
import './About.css'

const About = () => {
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
                    <p className='about-text'> MY STACK INCLUDES JAVASCRIPT, REACT.JS, AND RUBY ON RAILS. </p>
                </div>

                <img className='portrait' src={require("../png/Johnson-01378.jpg")} alt='Portrait' />
            </div>
            <div className='social-media-handles'>
                <p> LinkedIn: <a className='handles' href="https://www.linkedin.com/in/johnson-kow/">@johnson-kow</a> </p>
                <p> GitHub: <a   className='handles' href="https://github.com/JohnsonNYC">@JohnsonNYC</a></p>
                <p> Twitter: <a  className='handles' href="https://twitter.com/TheJohnsonKow">@TheJohnsonKow</a></p>
                <p> Medium: <a   className='handles' href=" ">@jkow</a></p>
            </div>
        </div>
    );
}

export default About;