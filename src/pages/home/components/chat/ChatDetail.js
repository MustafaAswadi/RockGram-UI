import React from 'react'
import { Link } from 'react-router-dom'

const ChatDetail = (chat) => {
    return (
        <div>
            <Link to={`chat/${chat.chatId}`}>
                <li className='chat-profile'>
                    <div className='row'>
                        <div className='col-2'>{chat.children}</div>
                        <div className='col-10'>
                            <div>
                                <strong className='user-name'>{chat.name}</strong>
                            <small className='message-time-chattype'>{chat.time}</small>
                            </div>
                        </div>
                    </div>
                </li>
            </Link>            
        </div>
    )
}

export default ChatDetail
