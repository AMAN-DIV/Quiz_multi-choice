import './signup.css';

import React from 'react';
import {Link} from 'react-router-dom';


function Signup() {
    return (
      <div>
       {/* <h3>This is signup page</h3> */}
       <div className="signup-container">
        <h1>Welcome to HealthGuard Pro</h1>
        <p>Sign up to start your journey towards a healthier lifestyle.</p>
        <form className="signup-form">
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Name" required />
          <input type="password" placeholder="Password" required />
          
          <button type="submit" className="signup-button"><Link className="router-link"  to='/login'>Sign Up</Link></button>
        </form><br/>
        <p className="login-text">
          Already have an account? <Link to='/login'style={{color:'green',}} >Login</Link>
        </p>
      </div>
      </div>
    );
  }


  
  export default Signup;