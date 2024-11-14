import {Link} from 'react-router-dom'

function NewPassword() {
    return (
      <div>


<div className="signup-container">
<h1>HealthGuard Pro</h1><br/>
       <form className="signup-form">
         
          <input type="string" placeholder="Password" required />
           <input type="string" placeholder="Confirm Password" required />
          
           <button type="submit" className="signup-button" ><Link  className="click-button" to='/'>Reset Password</Link></button>
         </form>
        
           
      </div>
      </div>
    );
  }
  
  export default NewPassword;


