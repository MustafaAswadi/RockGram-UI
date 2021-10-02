import React from 'react'
import './chattype.css'
import { Link } from 'react-router-dom'
import PresonalChatIcon from '../../../../shared/PresonalChatIcon'
import ChatDetieas from './ChatDetieas'



const Personal = (chat) => {
    return (
        <div>
            <ul>
                <Link to='chat/:id'>
                <li className='chat-profile'>
                    <div className='row'>
                        <div className='col-2'>
                            <PresonalChatIcon width='30'/>
                        </div>
                        <ChatDetieas name={chat.name} lastMsg={chat.lastMsg} time={chat.time} />
                    </div>
                </li>
                </Link>

            </ul>
        </div>
    )
}

export default Personal
