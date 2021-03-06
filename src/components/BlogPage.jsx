import React from 'react';
import Navbar from './Navbar'
import {Parallax} from 'react-parallax'
import data from './data/data.json';
import background from '../png/Blog Header.jpg'
import './BlogPage.css'

const BlogPage = () => {
    return (
        <div id='blog-page'>
            <Parallax bgImage={background} strength={-200}>
                <div id='blog-banner'>
                    <Navbar />
                    <div className='blog-description-wrapper'>
                        <p id='blog-description-text'>Track my learning progress through my blogs</p>
                    </div>
                </div>
            </Parallax>
            <div className='blog-container'>
                <div className='subtitle'>
                    Blogs
                </div>

                {data.reverse().map((blog) =>
                    <div className='blog-item'>
                        <div className="blog-thumbnail">
                            <img className='blog-img' src={blog.imgSrc} alt={blog.title} />
                        </div>
                        <div className='blog-information'>
                            <div className='date'>{blog.date}</div>
                            <h1 className='title'>{blog.title}</h1>
                            <div className='summary'> {blog.description}</div>
                            <a className='read-more' href={blog.url}>Read More</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BlogPage;
