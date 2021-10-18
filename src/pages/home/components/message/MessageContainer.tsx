import React from 'react'
import CreateMessage from './CreateMessage'

import Recevier from './Recevier'
import Sender from './Sender'


interface MessageContainerProps {
    msg:any
}
 
interface MessageContainerState {
    
}
 
class MessageContainer extends React.Component<MessageContainerProps, MessageContainerState> {
    state ={
        // msg: []
        activUserId : true
    };
    componentDidMount(){

        
    }

     getDate(date: any) {
        var d = new Date(date);
        var time = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
        return time;
    }
   
    render() {
        const {msg: messages} = this.props;
        return (
        <div className='home-com message-seaction'>

            <div className='message-contant' id='msg-content'>
               <div id='msg-content2'>
                {(messages === undefined) ? 'Loading': messages.map((message: any) => (
                    <div key={message.id}>  
                        {(message.userId === this.state.activUserId)  ?
                            <Sender message={message} />:
                            <Recevier message={message}/>
                        }
                    </div>
                ))}                
                {(messages === undefined) ? '': (messages.length === 0) && <h1 className='noMessages'>-------- No Messages --------</h1>}  

                </div> 
            </div>
            <CreateMessage/>

    </div>

        )
    }
}
 
export default MessageContainer;


