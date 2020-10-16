import React from 'react';
import Navbar from './Navbar'
import data from './data/data.json';
import './BlogPage.css'

const BlogPage = () => {
    return (
        <div id='blog-page'>
            <div id='blog-banner'>
                <Navbar /> 
            </div>
            <div className='blog-container'>
                {data.map((blog)=>
                    <li>{blog.title}</li>
                )}
            </div>
        </div>
    );
}

export default BlogPage;