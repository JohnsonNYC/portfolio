import React from 'react';
import './VideoContainer.css'
const VideoContainer = () => {
    return (
        <div className='video-container'>
            <hr />
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
    );
}

export default VideoContainer;