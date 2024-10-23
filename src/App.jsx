import Header from './components/Header/Header'
import Blogs from './Blogs/Blogs'
import './App.css'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  

  return (
    <>
      

    <div className='w-10/12 mx-auto'>
    <Header></Header>
      <div className='md:flex'>
      <Blogs ></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </div>
     
    </>
  )
}

export default App
