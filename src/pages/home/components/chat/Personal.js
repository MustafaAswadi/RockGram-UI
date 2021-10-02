import React, { Component } from 'react'
import './chattype.css'
import PresonalChatIcon from '../../../../shared/PresonalChatIcon'
import ChatDetail from './ChatDetail'
import { fetchChats } from './actions/chatsAction'
import { connect } from 'react-redux'

class Personal extends Component {    
    state ={
        personal: []
    };

    componentDidMount(){
        this.props.fetchChats();
    }

     getDate(date) {
        var d = new Date(date);
        var n = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
        return n;
    }

    render() {
        const {chats} = this.props;
        return (
            <div>
                <ul>
                    {chats.map(chat => (
                        <ChatDetail key={chat.id} name={chat.name} lastMsg='csdd' time={this.getDate(chat.date)} chatId={chat.id}>
                            {console.log( typeof chat.date)}
                            <PresonalChatIcon width='30'/>
                        </ChatDetail>     
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps =({ chats, fetching, error }) =>{
    return {
        chats,
        fetching,
        error
    };
}

const mapDispatchToProps = {
    fetchChats
}

export default connect(mapStateToProps, mapDispatchToProps) (Personal);
    


