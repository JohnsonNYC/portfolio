import React from 'react';
import './BlogItem.css'

const BlogItem = (props) => {
    const {blog} = props;
    return ( 
        <div className='blog-item'>
            <div className='blog-thumbnail'>
                <img className='blog-img' src={blog.imgSrc} />
            </div>
        </div>
    );
}

export default BlogItem;