import React from 'react';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className='description-wrapper'>
            {/* try to get description 1 to be of font family Bebas Neue Pro */}
            <p id='description-1'><strong> Hello I'm Johnson Kow </strong></p>
            <p className='description'> For the past year, I've been honing my skills as a fullstack developer.</p>
            <p className='description'> Add more information here yaata yaata</p>
        </div>
    );
}

export default HomeBanner;