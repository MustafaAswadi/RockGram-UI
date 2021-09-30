import React from 'react'

const Message = () => {
    return (
        <div className='col-6'>
        <div className='home-com message-seaction'>
            <div className='message-contant'>
                <div className='row message-container recevier'>
                    <div className='col-1'>
                        <div className='user-icon'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
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
            <form className="row">
                <div className="col-10 message-text-input">
                    <textarea className='form-control' rows='1'placeholder='Type a message'></textarea>
                </div>
                <div className="col-2 message-text-send">
                    <button type="submit" className="btn btn-danger ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cursor-fill" viewBox="0 0 16 16">
                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                    </svg>
                    </button>
                </div>
            </form>
            </div>
        </div>
    </div>


    )
}

export default Message
