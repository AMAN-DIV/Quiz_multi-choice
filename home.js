import React from "react";
import {Link} from 'react-router-dom'

import './home.css';

function Home() {
    return (
     <>
      <div>
       
       <div className="signup-container">
       <form className="signup-form">
       <h3>This is Home page</h3>
          
       <Link className="router-link" to='/login'>   <button type="submit" className="signup-button">Login</button></Link><br/>
       <Link className="router-link" to='/signup'>   <button type="submit" className="signup-button">Signup</button></Link><br/>


         </form>
       
      </div>
      </div>
     </>
    );
  }
  
  export default Home;




