/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

const Blog = ({blog}) => {
    const {cover,title,author_img,author,reading_time,posted_date,hashtags} =blog;
    return (
        <div className='mb-16 border-b-2'>
            <img className='h-64 w-[400px] rounded-xl' src={cover} alt={`Cover Picture of${title}`} />
            <div className='flex justify-between  items-center  '>
               <div className='flex gap-2 my-4'>
               <div>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                </div>
                <div>
                    <h3 className='text-2xl'> {author}</h3>
                    <p>{posted_date}</p>
                </div>
               </div>
                <div>
                    <span>Min Read:{reading_time}</span>
                </div>
            </div>
            <h2 className="text-4xl font-bold text-cyan-900">{title}</h2>
            <p className='mr-2'>
                {
                   hashtags.map((hash,idx) => <span className='mr-2' key={idx}><a href="">{hash}</a></span>) 
                }
            </p>
        </div>
    );
};
Blog.prototypes = {
    blog : PropTypes.object.isRequired
}
export default Blog;