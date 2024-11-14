import React from 'react';
import {Link} from 'react-router-dom'

    
  
  
  function Login() {
    return (
        <div>
        {/* <h3>This is signup page</h3> */}
        <div className="signup-container">
         <h1>Welcome to HealthGuard Pro</h1>
         <p>Login to get started</p>
         <form className="signup-form">
           <input type="email" placeholder="Email Address" required />
          
           <input type="password" placeholder="Password" required />
           <div className="forgot-password">
            <a href="/forgot-password"><Link to='/forgotpassword'>Forgot Password?</Link></a>
          </div>
          
            <button type="submit" className="signup-button"><Link className="router-link" to='/'>Login</Link></button>
         </form>
         <br/>
       
         <p className="login-text">
         Don't have an account <Link className='signup-click' to='/signup'>Signup</Link>
        </p>
       </div>
       </div>

    )
  }
  
  export default Login;