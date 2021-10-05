import React from 'react'

const Sender = (message) => {
    return (
        <div className='row message-container sender '>
            
            <div className='col-6 message-dialoge2'>
                <div className='message-dialoge'>
                    <p className='user-text'>{message.text}</p>    
                </div>    
                    <small className='message-time'>{message.time}</small>
            </div>
        </div>

    )
}

export default Sender
