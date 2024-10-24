import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../components/Blog/Blog';
import PropTypes from 'prop-types';
import ('./Blogs.css')



const Blogs = ({handleAddToBookMark,handleMarkAsRead}) => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data)
        )
    },[])
    return (
        <div className='md:w-2/3'>
            <h1 className="text-4xl">Blogs :{blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id}
                    handleAddToBookMark={handleAddToBookMark}
                    handleMarkAsRead={handleMarkAsRead}
                     blog={blog} 
                                  ></Blog>)
            }
        </div>
    );
};

Blogs.prototypes ={
    handleAddToBookMark:PropTypes.func,
    handleMarkAsRead :PropTypes.func
}

export default Blogs;