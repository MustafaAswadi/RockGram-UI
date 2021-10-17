
import React, { Component } from 'react'
import './chattype.css'
import ChatDetail from './ChatDetail';
import GroupsChatIcon from '../../../../shared/GroupsChatIcon';



class Group extends Component {    
    state={
        chats:[]
    }

     getDate(date) {
        var d = new Date(date);
        var time = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
        return time;
    }

    render() {
        const {chats} = this.state;

        return (
            <div>
                <ul>
                    {chats.map(chat => (
                         <ChatDetail key={chat.id} name={chat.name} time={this.getDate(chat.date)} chatId={chat.id}>
                            <GroupsChatIcon width='30'/>
                        </ChatDetail>      
                     ))}
                    {(chats.length === 0) && <h1 className='nochat'>------ NO Chats ------</h1>}
                </ul>
            </div>

        );
    }
}


export default Group;
    



