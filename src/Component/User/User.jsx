import { Link } from "react-router-dom";


const User = ({user}) => {
    const{id,name,phone,email} =user
    const userStyle ={
        border:'2px solid yellow',
        padding:'5px',
        borderRadius:'5px'
    }
    return (
        <div style={userStyle}>
            <h2>name:{name}</h2>
            <h2>id:{id}</h2>
            <h2>phone:{phone}</h2>
            <h2>email:{email}</h2>
          <Link to={`/user/${id}`}>show details</Link>
          <Link to={`/user/${id}`}><button>click me</button></Link>
        </div>
    );
};

export default User;