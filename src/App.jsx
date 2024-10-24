import Header from './components/Header/Header'
import Blogs from './Blogs/Blogs'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks,setBookmarks] = useState([])

  const handleAddToBookMark = blog =>{
    const newBookmarks =[...bookmarks,blog]
    setBookmarks(newBookmarks);
  }



  const[readingTime,setReadingTime] =useState(0)
  const handleMarkAsRead = (id,time) =>{
    const newReadingTime=readingTime+time;
    setReadingTime(newReadingTime)

    // console.log('Remove bookmark',id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)
    
  }

  return (
    <>
      

    <div className='w-10/12 mx-auto'>
    <Header></Header>
      <div className='md:flex'>
      <Blogs
      handleMarkAsRead={handleMarkAsRead}
      handleAddToBookMark={handleAddToBookMark}></Blogs>
      <Bookmarks
       bookmarks={bookmarks}
       readingTime={readingTime}
       ></Bookmarks>
      </div>
    </div>
     
    </>
  )
}

export default App
