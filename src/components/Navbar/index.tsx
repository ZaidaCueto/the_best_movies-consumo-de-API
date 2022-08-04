import { Link } from "react-router-dom";
import{BiCameraMovie, BiSearchAlt2} from 'react-icons/bi';

export function Navbar(){
    return(
     <nav>
        <h2><Link to="/"> 
        <BiCameraMovie/>
        The Best Movies</Link></h2>
        <form >
            <input type="text" placeholder="Busque um filme" />
            <button type="submit" >
                <BiSearchAlt2/>
            </button>
        </form>
     </nav>
    )
} 