import React from 'react'
import ChatProfileContainer from './ChatProfileContainer'


interface ChatProfileProps {
    
}
 
interface ChatProfileState {
    
}
 
class ChatProfile extends React.Component<ChatProfileProps, ChatProfileState> {
    render() { 
        return (
            <div className='home-com profile-seaction'>
                <ChatProfileContainer/>
            </div>
    )
    }
}
 
export default ChatProfile;
