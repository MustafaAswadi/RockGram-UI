import './components/home.css'
import logo from '../../assets/img/logo2.png'
import  React from 'react';


const Home = () => {


    const setChat = (e) =>{

    }


    return (
        <div className='container-fluid'>

            <nav class="navbar navbar-light fixed-top" style={{padding:'30px',}} >
                <div class="container-fluid" style={{ marginTop: '0px'}}>
                    <img src={logo} alt='RockGram Logo' className='header-logo'/>
                    {/* <form class="d-flex search-form">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-secondery" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </button>
                    </form> */}
                </div>
            </nav>













            
            <div className='row'>
                {/* ============== CHAT =============== */}
                <div className='col-3'>
                    <div className=' chat-seaction'>
                        <div className='chat-type-link home-com home-com-chat1'>
                                <div className='row'>
                                    <div className='col'>
                                        <button type="button" class="btn active">Presonal</button>
                                        
                                    </div>
                                    <div className='col'>
                                        <button type="button" class="btn">Group</button>
                                    </div>
                                </div>
                        </div>
                        <div className='chat-conyent home-com home-com-chat2'>
                           
                        </div>
                    </div>
                </div>

                {/* ============== MESSAGE =============== */}
                <div className='col-6'>
                    <div className='home-com message-seaction'>
                        <div className='message-contant'>
                            <div className='row message-container recevier'>
                                <div className='col-1'>
                                    <div className='user-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <div className='message-dialoge'>
                                        <strong className='user-name'>Mustafa Aswadi</strong>
                                        <p className='user-text'>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>    
                                        <small className='message-time'>3:43 Pm</small>
                                    </div>    
                                </div>
                            </div>
                        
                            <div className='row message-container recevier'>
                                <div className='col-1'>
                                    <div className='user-icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                    </div>
                                </div>
                                <div className='col-8'>
                                    <div className='message-dialoge'>
                                        <strong className='user-name'>Mustafa Aswadi</strong>
                                        <p className='user-text'>Hi</p>  
                                        <small className='message-time'>3:43 Pm</small>  
                                    </div>    
                                </div>
                            </div>


                            <div className='row message-container sender '>
                                <div className='col-8 message-dialoge2'>
                                    <div className='message-dialoge'>
                                        <p className='user-text'>Hi</p>  
                                        <small className='message-time'>3:43 Pm</small>  
                                    </div>    
                                </div>
                            </div>
                            <div className='row message-container sender '>
                                <div className='col-6 message-dialoge2'>
                                    <div className='message-dialoge'>
                                        <p className='user-text'>Hi img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>    
                                        <small className='message-time'>3:43 Pm</small>
                                    </div>    
                                </div>
                            </div>
                            <div className='row message-container sender '>
                                <div className='col-6 message-dialoge2'>
                                    <div className='message-dialoge'>
                                        <p className='user-text'>Hi img elements must have an alt prop, either with meaningful text, or an empty string for decorative images</p>    
                                        <small className='message-time'>3:43 Pm</small>
                                    </div>    
                                </div>
                            </div>


                        
                        
                        </div>

                        
                        <div className='message-sender'>
                        <form class="row">
                            <div class="col-10 message-text-input">
                                <textarea className='form-control' rows='1'placeholder='Type a message'></textarea>
                            </div>
                            <div class="col-2 message-text-send">
                                <button type="submit" class="btn btn-danger ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cursor-fill" viewBox="0 0 16 16">
                                    <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                                </svg>
                                </button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>


                {/* ============== PROFILE =============== */}
                <div className='col-3'>
                    <div className='home-com profile-seaction'>
                        Profile
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home
