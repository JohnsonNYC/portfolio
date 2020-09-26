import React from 'react';
import './About.css'

const About = () => {
    return ( 
        <div className='about'>
            <div className='subtitle'>
                About Johnson Kow:
            </div>
        
            <div className='about-text-picture'>
                <div className='about-text-container'>
                    <p className='about-text'>Sorelle Amore is a well-known photographer, filmmaker, influencer, and savvy businesswoman who inspires her millions of followers around the globe on how to maximise the human experience and live a life of wonder.</p>
                    <p className='about-text'>With the motto “Beautifully Building Better Beings”, Sorelle is a recognisable global media personality who interweaves art with informative content. Reaching an audience of over 1.5 million followers mainly on the YouTube and Instagram platforms, Sorelle is mostly known for creating messaging around the subjects of travel, photography and human optimisation.</p>
                    <p className='about-text'>Having worked with international brands including Samsung, Porsche, Squarespace, Armani, and Skillshare, Sorelle has extensive experience partnering with companies to successfully promote their message to a broad range of audiences, in many regions of the world.</p>
                    <p className='about-text'>In 2017, Sorelle rose to the top of the global “Best Job On The Planet” competition, beating 17,000+ other influencers to win the five-figure cash prize, three months of luxury travel, and a two year position as the ambassador for ThirdHom</p>
                </div>
            
                <img className='portrait' src={require("../png/Johnson-01378.jpg")} alt='Portrait'/>
            </div>
        </div>
    );
}

export default About;