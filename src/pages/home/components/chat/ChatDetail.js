import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const ChatDetail = (chat) => {
    const [isActive,setActive ] = useState(true)

    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(true)
        },2)
    }
    return (
        <div>
            <Link to={`?chatId=${chat.chatId}`} onClick={refreshPage}>


                <li className='chat-profile'>
                    <div className={`row ${!isActive ? 'activeChat1' : ''}`}>
                        <div className='col-2'>{chat.children}</div>
                        <div className='col-10'>
                            <div>
                                <strong className='user-name'>{chat.name}</strong>
                                <div className='message-time-chattype1'>
                                    <small className='message-time-chattype'>{chat.time}</small> 
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </Link>            
        </div>
    )
}

export default ChatDetail
