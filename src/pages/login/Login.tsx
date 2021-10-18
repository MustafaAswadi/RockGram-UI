import '../../assets/styles/login.css'
import Logo from '../../assets/img/logo2.png'
import main from '../../assets/img/main.jpg'
import { Link } from 'react-router-dom'
import Getapp from '../../shared/Getapp'
import Header from '../../shared/Header'
import React from 'react'


class Login extends React.Component {
    render() { 
        return (
        <div className='container' >
            <div className='row align-items-center'>
                <div className="col" id='intro'>
                    <Header style={{marginBottom: '-20px'}}/>
                    <img src={main} alt="rockgram logo"  className='main-logo' />
                </div>
                <div className="col">
                    <form className='login-form cart' >
                        <div className='header'>
                            <img src={Logo} alt="rockgram logo"  className='login-logo' style={{marginBottom: '3rem'}} />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="Email" placeholder='Email' aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder='Password' id="Password"/>
                        </div>
                        <div className='d-grid gap-2'>
                            <button type="submit" className="btn btn-danger btn-login">Login</button>
                        </div>
                        <hr />
                        <Link to='forgot-password'>Forgot password?</Link>
                    </form>
                    <div className='cart singup'>
                        <p>Don't have an account? <Link to='/signup'> Sign up</Link></p>
                        
                    </div>
                    <Getapp/>
                </div>
            </div>
        </div>
    );
    }
}
 
export default Login;

