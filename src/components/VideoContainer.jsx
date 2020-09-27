import React from 'react';
import './VideoContainer.css'
const VideoContainer = () => {
    return (
        <div className='video-container'>
            <hr />
            <div id='blog-header' className='subtitle'> Projects </div>
            <iframe
                title="unique ID"
                src="https://www.youtube.com/embed/Bow4BPYAJlg"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
            <iframe title='Travel Rails'
                src="https://www.youtube.com/embed/AUwPwo0MrgE"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
            <iframe
                src="https://www.youtube.com/embed/UjEURK5LSIo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </div>
    );
}

export default VideoContainer;