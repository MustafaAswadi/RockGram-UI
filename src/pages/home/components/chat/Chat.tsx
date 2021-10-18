import  React from 'react';
import Personal from './Personal'
import Group from './Group'
import CreateChat from './CreateChat';

interface ChatProps {
    
}
 
interface ChatState {
    
}
 
class Chat extends React.Component<ChatProps, ChatState> {
    state ={
        isPersonal:true
    }
    render() { 
    const {isPersonal} = this.state

        return (
            <div className='col-4'>
                <div className=' chat-seaction'>
                    <div className='chat-type-link home-com home-com-chat1'>
                        <div className='row'>
                            <div className='col'>
                                <button type="button" className={`btn ${isPersonal? 'active': ''}`} onClick={()=> this.setState({isPersonal:true})}>Presonal</button>                    
                            </div>
                            <div className='col'>
                                <button type="button" className={`btn ${!isPersonal? 'active': ''}`} onClick={()=> this.setState({isPersonal:false})}>Group</button>
                            </div>
                        </div>
                    </div>
                    <div className='chat-conyent home-com home-com-chat2'>
    
                    <div className='chat-load'> { isPersonal ? 
                        <Personal />:  
                        <Group />} 
                    </div>   
    
                        <CreateChat isPersonal={isPersonal}/>
                    </div>
                </div>    
            </div>
            
        )
    }
}
 
export default Chat;

