import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='blog'>
            <div id='blog-header' className='subtitle'> Blog </div>

            <div className='blog-container'>
                <div className='featured'>Featured</div>

                <div className='feature-nav'>
                    <div className='page'> next </div>
                    <div className='page'> prev </div>
                </div>
            </div>

        </div>
    );
}

export default Blog;