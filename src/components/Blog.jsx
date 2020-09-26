import React,{useState} from 'react';
import BlogItem from './BlogItem'
import data from './data/data.json';
import './Blog.css';
import 'fontsource-abel';

const Blog = () => {
    const [blogs] = useState(data)
    const [displayIndex, setDisplayIndex] = useState(0)
    const [stack,setStack] = useState(blogs.slice(displayIndex,displayIndex+4))


    let onNext = () =>{
        if(displayIndex >= blogs.length){
            setDisplayIndex(0)
        }else{
            setDisplayIndex(displayIndex+4)
        }

        setStack(blogs.slice(displayIndex, displayIndex+4))
    }

    return (
        <div className='blog'>
            <div id='blog-header' className='subtitle'> Blog </div>

            <div className='blog-container'>
                <div className='featured'>Featured</div>

                <div className='feature-nav'>
                    <div className='page' onClick={()=> console.log('PREV')}> prev </div>
                    <div className='page' onClick={onNext}> next </div>
                </div>
            </div>
                <div className='blog-thumbnails'>
                    {/*Create State here with all the blogs and map such that you make a div for each one */}
                    {stack.map((blog)=>{
                        return <BlogItem key={blog.id} blog={blog}/>
                    })}
                </div>

        </div>
    );
}

export default Blog;