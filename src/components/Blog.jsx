import React,{useState, useEffect} from 'react';
import BlogItem from './BlogItem'
import data from './data/data.json';
import {Link} from 'react-router-dom'
import './Blog.css';
import 'fontsource-abel';


const Blog = () => {

    const [blogs] = useState(data)
    const [displayIndex, setDisplayIndex] = useState(0)
    const [stack,setStack] = useState([])

    useEffect( ()=> {
        let newStack = blogs.reverse().slice(displayIndex,displayIndex+3)
        setStack(newStack)
        setDisplayIndex(displayIndex + 3)
        // eslint-disable-next-line
    },[])


    return (
        <div className='blog'>
            <hr/>
            <div id='blog-header' className='subtitle'> Blogs </div>


                <div className='blog-thumbnails'>
                    {stack.map((blog)=>{
                        return <BlogItem key={blog.id} blog={blog}/>
                    })}
                </div>
            <button id='read-more'><Link className='readmore' to='/blog'> Read More </Link></button>
        </div>
    );
}

export default Blog;