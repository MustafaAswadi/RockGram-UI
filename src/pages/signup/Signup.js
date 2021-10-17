import '../../assets/styles/login.css'
import Logo from '../../assets/img/logo2.png'
import main2 from '../../assets/img/main2.png'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Getapp from '../../shared/Getapp'
import Header from '../../shared/Header'

class Signup extends React.Component {
    render() { 
        return (    
      <div className='container' style={{marginTop:'30px'}}>
        <div className='row align-items-center'>
            <div className="col" id='intro2'>
                <Header />
                <img src={main2} alt="rockgram logo"  className='main2-logo'  />
               <Getapp/>
            </div>
            <div className="col">
                <form className='login-form cart' >
                    <div className='header'>
                    <img src={Logo} alt="rockgram logo"  className='login-logo'  />
                    <p className='header-p'><strong>Sign up to start a fascinating conversation with your friends.</strong></p>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="fullname" placeholder='Full Name'/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="Email" placeholder='Email' aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" placeholder='Password' id="Password"/>
                    </div>
                    <div className='d-grid gap-2'>
                        <button type="submit" className="btn btn-danger btn-login">Sign Up</button>


                    </div>
                    <p className='footer-p'>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
                </form>
                <div className='cart singup'>
                    <p>Have an account? <Link to='/'>  Log in</Link></p>
                </div>
            </div>
            
        </div>
    </div>
)
    }
}
 
export default Signup;

