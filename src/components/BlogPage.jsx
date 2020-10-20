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
                {data.map((blog) =>
                    <article className='blog-item'>
                        <header className='blog-header'>
                            <div> {blog.date}</div>
                            <h1> {blog.title}</h1>
                        </header>
                        <div className='summary'>
                            <div> Enter Description here</div>
                            <p>
                                <a href={blog.url}>Read More</a>
                            </p>
                        </div>
                    </article>
                )}
            </div>
        </div>
    );
}

export default BlogPage;