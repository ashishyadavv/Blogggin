import React from 'react';
import './Login.css'

class Login extends React.Component{
    render(){
        return(
            <div>
               
                
                <nav style={{display:'flex', justifyContent: 'flex-end'}}>
                <a className="signup" href="#0">Signup</a>
                <a className="login" href="#0">Login</a>
                </nav>
            </div>
        )
            
        
    }
}

export default Login;