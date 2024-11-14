
import {Link} from 'react-router-dom'
import './forgotpassword.css';
import NewPassword from './newpassword';


function Forgotpassword() {

    function OTPVerification() {
       
        
    

  
    }
    return (
      <div>
     <div className="otp-container">
            <h1 className="otp-title">HealthGuard Pro</h1>
            <h2 className="otp-subtitle">Enter OTP</h2>
            <p className="otp-instruction">Please enter the 6-digit code.</p>
            <input
                type="text"
              
                maxLength="6"
                placeholder="000000"
                className="otp-input"
            />
            
             
           <button type="submit" className="otp-button" ><Link className="click-button" to='/verify' >Verify</Link></button>
        </div>

       
          
        


       </div>


           
    
    );
  
  }
  
  export default Forgotpassword;