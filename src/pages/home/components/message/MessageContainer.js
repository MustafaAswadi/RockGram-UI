import React, { Component } from 'react'
import CreateMessage from './CreateMessage'

import Recevier from './Recevier'
import Sender from './Sender'



class MessageContainer extends Component {
    

    state ={
        // msg: []
        activUserId : true
    };
    componentDidMount(){

        
    }

     getDate(date) {
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
                {(messages === undefined) ? 'Loading': messages.map(message => (
                    <div key={message.id}>  
                        {(message.userId == this.state.activUserId)  ?
                            <Sender time={this.getDate(message.date)} text={message.text} />:
                            <Recevier time={this.getDate(message.date)} text={message.text}/>
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
    


