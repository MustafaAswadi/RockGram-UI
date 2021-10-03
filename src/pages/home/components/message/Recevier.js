import React from 'react'
import PresonalChatIcon from '../../../../shared/PresonalChatIcon'

const Recevier = (message) => {
    return (
        <div className='row message-container recevier'>
            <div className='col-1'>
                <PresonalChatIcon width='30'/>
            </div>
            <div className='col-8'>
                <div className='message-dialoge'>
                    <p className='user-text'>{message.text}</p>  
                </div>    
                    <small className='message-time'>{message.time}</small>  
            </div>
        </div>

    )
}

export default Recevier
