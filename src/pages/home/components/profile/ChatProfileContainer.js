import React, { Component } from 'react'
import { fetchPersonalChats } from '../chat/actions/chatsAction'
// import { fetchGroupChats } from '../chat/actions/chatsAction'

import { connect } from 'react-redux'


class ChatProfileContainer extends Component {

    state ={
        personal: []
    };

    componentDidMount(){
        this.props.fetchPersonalChats();
        // this.props.fetchGroupChats();
    }
    
    
    
    render() {
        
        
        const queryParams = new URLSearchParams(window.location.search);
        const chatId = queryParams.get('chatId');
        const {chats} = this.props;
        const openChat = chats.filter((chat)=>chat.id == chatId)
        {console.log(chats)}
        return (
            <>
            {openChat.map(chat => (
            <div className='profile-content'>
                <div className='user-icon recevier-icon' style={{backgroundColor:'#c57ef7'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                </div>
                <div className='user-name'>
                    <strong>{chat.name}</strong>
                </div>
                <div className='user-email'>
                    <p>{chat.type}</p>
                </div>
                <div className='user-action'>        
                <button type="button" className="btn btn-outline-danger btn-sm" style={{marginTop:'20px'}}>Delete Chat</button>
                </div>                
            </div>
            ))}
            </>
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
    fetchPersonalChats,
    // fetchGroupChats
}

export default connect(mapStateToProps, mapDispatchToProps) (ChatProfileContainer);
    
