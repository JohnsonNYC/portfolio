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
                    <div className='blog-item'>
                        <div className="blog-img">
                            <img src={blog.imgSrc} alt={blog.title}/>
                        </div>
                        <div className='blog-information'>
                            <div className='date'>{blog.date}</div>
                            <div className='title'>{blog.title}</div>
                            <div className='Description'> {blog.description}</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BlogPage;

// {/* <article className='blog-item'>
//                         <img src={blog.imgSrc}/>
//                         <header className='blog-header'>
//                             <div> {blog.date}</div>
//                             <h1> {blog.title}</h1>
//                         </header>
//                         <div className='summary'>
//                             <div>{blog.description}</div>
//                             <p>
//                                 <a href={blog.url}>Read More</a>
//                             </p>
//                         </div>
//                     </article> */}