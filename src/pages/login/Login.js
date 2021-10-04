import '../../assets/styles/login.css'
import Logo from '../../assets/img/logo2.png'
import main from '../../assets/img/main.jpg'
import { Link } from 'react-router-dom'
import Getapp from '../../shared/Getapp'
import Header from '../../shared/Header'
import React, {useState} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

async function loginUser(credentials) {

     await Axios({
        method: 'post',
        url: 'http://localhost:3002/auth/login',
        data: {email: credentials.email, password: credentials.password}
    }).then(res => {
        console.log("res.data",res.data);
        return res.data;
    })
   }

   export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault()
        const token = await loginUser({
          email,
          password
        });
        history.push('/home');
      }


    return (

        <div className='container' >
            <div className='row align-items-center'>
                <div className="col" id='intro'>
                    <Header style={{marginBottom: '-20px'}}/>
                    <img src={main} alt="rockgram logo"  className='main-logo' />
                </div>
                <div className="col">
                    <form className='login-form cart' onSubmit={handleSubmit}>
                        <div className='header'>
                            <img src={Logo} alt="rockgram logo"  className='login-logo' style={{marginBottom: '3rem'}} />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="Email" placeholder='Email' aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder='Password' id="Password" onChange={e => setPassword(e.target.value)}/>
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
    )
}