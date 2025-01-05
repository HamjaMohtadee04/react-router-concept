
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    const navigation = useNavigation()
    const location = useLocation()
    console.log(location)
    return (
        <div>
         <Navbar></Navbar>
         {
            navigation.state ==="loading" ? <p>loading ...</p>:
            <Outlet></Outlet>
         }
         
           <footer></footer>
        </div>
    );
};

export default Home;
