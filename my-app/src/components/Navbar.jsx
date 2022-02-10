const Navbar = () => {
    return ( 
       <div className="Navbar">
          <>
           <h3>Resorts</h3>
           </> 
             <div className="navlinks">
                <ul>
                <li><a href="Login">Login</a></li>
                <li><a href="Sign up">Sign up</a></li>
                <li className="btn"><a href="Cart">Cart</a></li>
                </ul>
             </div>
          
        </div>  
     );
}
 
export default Navbar;