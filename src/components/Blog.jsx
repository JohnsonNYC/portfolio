import React,{useState} from 'react';
import BlogItem from './BlogItem'
import data from './data/data.json';
import './Blog.css';
import 'fontsource-abel';

const Blog = () => {
    const [blogs] = useState(data)
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
                <div className='blog-thumbnails'>
                    {/*Create State here with all the blogs and map such that you make a div for each one */}
                    {data.map((blog)=>{
                        return <BlogItem key={blog.id} blog={blog}/>
                    })}
                </div>

        </div>
    );
}

export default Blog;