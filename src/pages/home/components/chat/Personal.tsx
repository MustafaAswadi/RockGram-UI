import React from 'react'
import './chattype.css'
import ChatDetail from './ChatDetail'
import PresonalChatIcon from '../../../../shared/PresonalChatIcon'

interface PersonalProps {
    
}
 
interface PersonalState {
    
}
 
class Personal extends React.Component<PersonalProps, PersonalState> {
    state ={
        personal: [],
        chats:[]
    };


     getDate(date: any) {
        var d = new Date(date);
        var time = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
        return time;
    }

    render() {
        return (
            <div>
                <ul>
                    
                    {this.state.chats.map(chat => (
                        <ChatDetail >
                            <PresonalChatIcon width='30'/>
                        </ChatDetail>     
                    ))}
                    {(this.state.chats.length === 0) && <h1 className='nochat'>------ NO Chats ------</h1>}

                </ul>
            </div>

        );
    }
}
 
export default Personal;
