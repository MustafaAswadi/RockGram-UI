import React, { Component } from 'react'
import { connect } from 'react-redux'
import './chattype.css'
import { fetchPersonalChats } from './actions/chatsAction'
import ChatDetail from './ChatDetail'
import PresonalChatIcon from '../../../../shared/PresonalChatIcon'

class Personal extends Component {    
    state ={
        personal: []
    };

    componentDidMount(){
        this.props.fetchPersonalChats();
    }

     getDate(date) {
        var d = new Date(date);
        var time = d.toLocaleString([], { hour: '2-digit', minute: '2-digit' });
        return time;
    }

    render() {
        const {chats} = this.props;
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

const mapStateToProps =({ chats, fetching, error }) =>{
    return {
        chats,
        fetching,
        error
    };
}

const mapDispatchToProps = {
    fetchPersonalChats
}

export default connect(mapStateToProps, mapDispatchToProps) (Personal);
    


