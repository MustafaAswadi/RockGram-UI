import '../../assets/styles/login.css'
import Logo from '../../assets/img/logo2.png'
import main2 from '../../assets/img/main2.png'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Getapp from '../../shared/Getapp'
import Header from '../../shared/Header'
import Axios from 'axios'
import useToken from "./utils/useToken";

async function SignUpUser(credentials) {
    await Axios({
       method: 'post',
       url: 'http://localhost:3001/user',
       data: {fullname: credentials.fullName, email: credentials.email, password: credentials.password}
   }).then(res => {
       console.log(res.data);
       return res.data;
   })
  }

const Signup = () => {
    const [email, setEmail] = useState();
    const [fullName, setFullName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await SignUpUser({
          email,
          password,
          fullName
        });
        console.log(token);

      }
    return (
        <div className='container' style={{marginTop:'30px'}}>
            <div className='row align-items-center'>
                <div className="col" id='intro2'>
                    <Header />
                    <img src={main2} alt="rockgram logo"  className='main2-logo'  />
                   <Getapp/>
                </div>
                <div className="col">
                    <form className='login-form cart' onSubmit={handleSubmit}>
                        <div className='header'>
                        <img src={Logo} alt="rockgram logo"  className='login-logo'  />
                        <p className='header-p'><strong>Sign up to start a fascinating conversation with your friends.</strong></p>
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" id="fullname" placeholder='Full Name' onChange={e => setFullName(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="Email" placeholder='Email' aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder='Password' id="Password" onChange={e => setPassword(e.target.value)}/>
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

export default Signup
