import React from 'react'
import { Link } from 'react-router-dom'
import GroupsChatIcon from '../../../../shared/GroupsChatIcon'
import ChatDetieas from './ChatDetieas'

const Group = (chat) => {
    return (
        <div>
            <ul>
            <Link to='chat/:id'>
                <li className='chat-profile'>
                    <div className='row'>
                        <div className='col-2'>
                            <GroupsChatIcon width='30'/>
                        </div>
                        <ChatDetieas name={chat.name} lastMsg={chat.lastMsg} time={chat.time}/>
                    </div>
                </li>
            </Link>
            </ul>
        </div>
    )
}

export default Group
