import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useLoaderData()
    const {postId} = useParams()
    const navigate = useNavigate()
    const {id,title,body} =post
    console.log(postId)
    const handleGoBack =() =>{
         navigate(-1)
    }
    return (
        <div>
            <h3>PostDetails:{id}</h3>
            {/* <p>id:{id}</p> */}
            <p>title:{title}</p>
            <p>body:{body}</p>
            <button onClick={handleGoBack}>go back</button>
        </div>
    );
};

export default PostDetails;