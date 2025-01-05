import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id,title} =post
    const navigate = useNavigate();

    const postStyle ={
        border:'2px solid yellow',
        padding:'5px',
        borderRadius:'5px'
    }
    const handleShowDetail =() =>{
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h3>id:{id}</h3>
            <p>title:{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link  to={`/post/${id}`}><button>show detail</button></Link>
            <button onClick={handleShowDetail}>click to see details</button>
        </div>
    );
};

export default Post;