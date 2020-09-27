import React,{useState, useEffect} from 'react';
import BlogItem from './BlogItem'
import data from './data/data.json';
import './Blog.css';
import 'fontsource-abel';

// Working Blog Renderer. 
// Now workion BlogItem to render title and create onClick for each
// div to take user to your medium article page!

const Blog = () => {
    const [blogs] = useState(data)
    const [displayIndex, setDisplayIndex] = useState(0)
    const [stack,setStack] = useState([])
    
    console.log(stack)
    console.log(displayIndex)

    useEffect( ()=> {
        let newStack = blogs.slice(displayIndex,displayIndex+3) //copy[]
        setStack(newStack)
        setDisplayIndex(displayIndex + 3)
        // eslint-disable-next-line
    },[])

    let onNext = () => {

        if(displayIndex >= blogs.length){ // if index is greater than data length
            setStack(blogs.slice(0,3))
            setDisplayIndex(0)
        }else{
            setStack(blogs.slice(displayIndex, displayIndex + 3))
            setDisplayIndex(displayIndex+3)
        }
    }


    return (
        <div className='blog'>
            <hr/>
            <div id='blog-header' className='subtitle'> Blogs </div>

            <div className='blog-nav'>
                <div className='featured'>Featured</div>
                <div className='feature-nav'>
                    <div className='page' onClick={()=> console.log('PREV')}> prev </div>
                    <div className='page' onClick={onNext}> next </div>
                </div>
            </div>

                <div className='blog-thumbnails'>
                    {stack.map((blog)=>{
                        return <BlogItem key={blog.id} blog={blog}/>
                    })}
                </div>
            <button id='read-more'> Read More </button>
        </div>
    );
}

export default Blog;