import React from 'react'

const ChatDetieas = (chat) => {
    return (
        <>
            <div className='col-8'>
                <div>
                    <strong className='user-name'>{chat.name}</strong>
                    <p className='user-text'>{chat.lastMsg}</p>
                </div>
            </div>
            <div className='col-1'>
                    <small className='message-time-chattype'>{chat.time}</small>
            </div>
        </>
    )
}

export default ChatDetieas
