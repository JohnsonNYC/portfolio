import React from 'react';
import './VideoContainer.css'
const VideoContainer = () => {
    return (
        <div className='video-container'>
            <div id='blog-header' className='subtitle'> Projects </div>
            <iframe
                title ="unique ID"
                src="https://www.youtube.com/embed/Bow4BPYAJlg"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen 
            />
            

        </div>
    );
}

export default VideoContainer;