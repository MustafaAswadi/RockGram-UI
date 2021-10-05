import './components/home.css'
import logo from '../../assets/img/logo2.png'
import  {React, useEffect} from 'react';
import Message from './components/message/Message';
import Profile from './components/profile/Profile';
import Chat from './components/chat/Chat';



const Home = () => {
    return (
        <div className='container-fluid'>

            <nav className="navbar navbar-light fixed-top" style={{padding:'30px',}} >
                <div className="container-fluid" style={{ marginTop: '0px'}}>
                    <img src={logo} alt='RockGram Logo' className='header-logo'/>
                </div>
            </nav>

            
            <div className='row'>
                {/* ============== CHAT =============== */}
                <Chat/>

                {/* ============== MESSAGE =============== */}
                <Message/>



                {/* ============== PROFILE =============== */}

                <Profile />

            
            </div>
        </div>
    )
}

export default Home