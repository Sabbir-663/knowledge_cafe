/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookMark,handleMarkAsRead}) => {
    const {id,cover,title,author_img,author,reading_time,posted_date,hashtags} =blog;
    return (
        <div className='mb-16 border-b-2'>
            <img className='h-56 md:h-96 w-11/12 rounded-xl' src={cover} alt={`Cover Picture of${title}`} />
            <div className='flex justify-between  items-center  space-y-4 '>
               <div className='flex gap-2 my-4'>
               <div>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                </div>
                <div>
                    <h3 className='text-2xl text-green-700'> {author}</h3>
                    <p>{posted_date}</p>
                </div>
               </div>
                <div className='flex gap-2 mr-16'>
                    <span>{reading_time } Read</span>
                    <button onClick={()=>handleAddToBookMark(blog)} className='text-2xl  text-blue-400 '><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-cyan-900">{title}</h2>
            <p className='mr-2'>
                {
                   hashtags.map((hash,idx) => <span className='mr-2' key={idx}><a href="">{hash}</a></span>) 
                }
            </p>
            {/* <p className='mr-2 flex gap-4'>{hashtags}</p> */}
                <button  onClick={()=>handleMarkAsRead(id,reading_time)}
                className='text-purple-600 font-bold underline'>Mark As Read</button>
        </div>
    );
};
Blog.prototypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookMark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;