import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        
      

        <div className="md:w-1/3 bg-gray-400 rounded-lg py-4">
              <div>
    <h3 className="text-4xl text-center">Reading Time :{readingTime}</h3>
    </div>
            <h2 className="text-3xl text-center">BookMarked Blogs:{bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,idx)=> <Bookmark
                
                bookmark={bookmark}
                key={idx}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes={
    bookmarks:PropTypes.array,
    readingTime:PropTypes.number
}
export default Bookmarks;