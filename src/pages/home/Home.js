import './components/home.css'
import logo from '../../assets/img/logo2.png'
import  {React} from 'react';
import Chat from './components/Chat';
import Message from './components/Message';
import Profile from './components/Profile';


const Home = () => {

    
    

    return (
        <div className='container-fluid'>

            <nav class="navbar navbar-light fixed-top" style={{padding:'30px',}} >
                <div class="container-fluid" style={{ marginTop: '0px'}}>
                    <img src={logo} alt='RockGram Logo' className='header-logo'/>
                </div>
            </nav>

            
            <div className='row'>
                {/* ============== CHAT =============== */}
                <Chat />

                {/* ============== MESSAGE =============== */}
                <Message/>



                {/* ============== PROFILE =============== */}
                <Profile/>

            </div>
        </div>
    )
}

export default Home
