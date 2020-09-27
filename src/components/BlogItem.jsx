import React from 'react';
import './BlogItem.css'

const BlogItem = (props) => {
    const { blog } = props;
    return (
        <div className='blog-item' onClick={() => console.log('hello')}>
            <div className='blog-thumbnail'>
                <a className='blog-link' href={blog.url} target='_blank' rel='noopener noreferrer'>
                    <img className='blog-img' src={blog.imgSrc} alt={`${blog.title}`} />
                    <div className='blog-title'>
                        {blog.title}
                    </div>
                </a>
            </div>
        </div>
    );
}

export default BlogItem;