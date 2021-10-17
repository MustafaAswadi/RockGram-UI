import React, { Component } from 'react'
import './chattype.css'
import ChatDetail from './ChatDetail'
import PresonalChatIcon from '../../../../shared/PresonalChatIcon'

class Personal extends Component {    
    state ={
        personal: [],
        chats:[]
    };


    render() {
        const {chats} = this.state;
        return (
            <div>
                <ul>
                    
                    {chats.map(chat => (
                        <ChatDetail key={chat.id} name={chat.name} time={this.getDate(chat.date)} chatId={chat.id}>
                            <PresonalChatIcon width='30'/>
                        </ChatDetail>     
                    ))}
                    {(chats.length === 0) && <h1 className='nochat'>------ NO Chats ------</h1>}

                </ul>
            </div>

        );
    }
}

export default Personal;
    


