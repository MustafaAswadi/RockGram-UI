import React  from 'react'


interface ChatProfileContainerProps {
    
}
 
interface ChatProfileContainerState {
    
}
 
class ChatProfileContainer extends React.Component<ChatProfileContainerProps, ChatProfileContainerState> {


    state={
        openChat:[{id:'',name:'', type:''}]
    }
    
    
    render() {
        
        const { openChat } = this.state

        return (
            <>
            {openChat.map(chat => (
            <div className='profile-content' key={chat.id}>
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



export default ChatProfileContainer;
    
