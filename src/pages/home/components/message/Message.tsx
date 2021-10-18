import React from 'react'
import MessageContainer from './MessageContainer'


interface MessageProps {
    
}
 
interface MessageState {
    
}
 
class Message extends React.Component<MessageProps, MessageState> {
    render() { 
        return (  
            <div className='col-6'>
                <MessageContainer msg={[]} />
            </div>
        );
    }
}
 
export default Message;


