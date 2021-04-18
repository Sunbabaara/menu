import {Link} from "react-router-dom";
function NavBar ({show, toggle}) {
    return(
     <nav className="container">
         <h1>DIETING APP</h1>

         <button onClick= {toggle}>{ show ? "CLOSE":"ADD"}</button>

         <div className="nav-items">
         <Link to="/" className= "items">Home</Link>
         <Link to="/about" className= "items">About</Link>
         <Link to="/services" className= "items">Services</Link>
         </div>
     </nav>   
    )
}
export default NavBar;