import '../../assets/styles/login.css'
import Logo from '../../assets/img/logo.png'
import appstore from '../../assets/img/appstore.png'
import googleplay from '../../assets/img/googleplay.png'
import main from '../../assets/img/main.jpg'



const login = () => {
    return (
        <div className='container' >
            <div className='row align-items-center'>
                <div className="col" id='intro'>
                    <h1>Welcome to <span>RockGram!</span></h1>
                    <img src={main} alt="rockgram logo"  className='main-logo'  />

                </div>
                <div className="col">
                    <form className='login-form cart'>
                        <div className='header'>
                        <img src={Logo} alt="rockgram logo"  className='login-logo'  />

                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="Email" placeholder='Email' aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <input type="password" className="form-control" placeholder='Password' id="Password"/>
                        </div>
                        <div className='d-grid gap-2'>
                            <button type="submit" className="btn btn-primary btn-login">Login</button>
                        </div>
                    </form>
                    <div className='cart singup'>
                        <p>Don't have an account? <a hraf='#'>Sign up</a></p>
                    </div>
                        <div className='getapp-secation'>
                            <div className='row'>
                                <p>Get the app.</p>
                                <div className='col'>
                                    <img src={appstore} alt="rockgram logo"  className='get-app-img'  />
                                </div>
                                <div className='col'>
                                    <img src={googleplay} alt="rockgram logo"  className='get-app-img'  />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default login
