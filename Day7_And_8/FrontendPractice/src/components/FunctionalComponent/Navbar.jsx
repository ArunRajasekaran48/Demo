import { Link } from "react-router-dom"
import "../../Css/Navbar.css"
const Navbar=()=>{
   return(
    <header>
        <nav>
        <ol>
                 <li><Link to='/' class="link">Home</Link></li>
                 <li><Link to='/About' class="link">About</Link></li>
                 <li><Link to='/Gallery' class="link">Gallery</Link></li>
                 <li><Link to='/Contact' class="link">Contact</Link></li>
                 <li><Link to='/sign-up' class="link">Signup</Link></li>
             </ol>
        </nav>
    </header>
   ) 
}
export default Navbar