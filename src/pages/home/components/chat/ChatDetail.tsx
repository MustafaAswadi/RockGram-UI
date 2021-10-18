import React from 'react'
import {Link} from 'react-router-dom'


interface ChatDetailProps{
    chat:any,
  
}

class ChatDetail extends React.Component<ChatDetailProps> {
    // state = {
    //     chat:{}      
    // }
    render() { 
        const {chat} = this.props
        return (<div>
        <Link to={`?chatId=${chat.chatId}`} >


            <li className='chat-profile'>
                <div className={`row `}>
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
);
    }
}
 
export default ChatDetail;

