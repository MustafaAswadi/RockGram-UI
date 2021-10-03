import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMessages } from './actions/messageAction'
import Recevier from './Recevier'
import Sender from './Sender'



class MessageContainer extends Component {
    

    state ={
        msg: []
    };
    componentDidMount(){
        const queryParams = new URLSearchParams(window.location.search);
        const chatId = queryParams.get('chatId');
        this.props.fetchMessages(chatId);
        
    }

     getDate(date) {
        var d = new Date(date);
        var time = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
        return time;
    }

    render() {
        const {messages} = this.props;
        return (
            <div className='message-contant' id='msg-content'>
               <div id='msg-content2'>
                {(messages === undefined) ? 'Loading': messages.map(message => (
                    <div key={message.id}>  
                        {(message.userId == 1)  ?
                            <Sender time={this.getDate(message.date)} text={message.text} />:
                            <Recevier time={this.getDate(message.date)} text={message.text}/>
                        }
                    </div>
                ))}                
                {(messages === undefined) ? '': (messages.length == 0) && <h1 className='noMessages'>-------- No Messages --------</h1>}  

                </div> 
            </div>
        )
    }
}

const mapStateToProps =({ messages, fetching, error }) =>{
    return {
        messages,
        fetching,
        error
    };
}

const mapDispatchToProps = {
    fetchMessages
}

export default connect(mapStateToProps, mapDispatchToProps) (MessageContainer);
    


