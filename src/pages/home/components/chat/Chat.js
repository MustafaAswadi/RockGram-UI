import  { React, useState } from 'react';
import Personal from './Personal'
import Group from './Group'
import CreateChat from './CreateChat';
import chatstore from './redux/chatstore'
import {Provider} from 'react-redux'


const Chat = () => {
    const [isPersonal,setPresonal ] = useState(true)

    return (
        <Provider store={chatstore}>
        <div className='col-4'>
            <div className=' chat-seaction'>
                <div className='chat-type-link home-com home-com-chat1'>
                    <div className='row'>
                        <div className='col'>
                            <button type="button" className={`btn ${isPersonal? 'active': ''}`} onClick={()=> setPresonal(true)}>Presonal</button>                    
                        </div>
                        <div className='col'>
                            <button type="button" className={`btn ${!isPersonal? 'active': ''}`} onClick={()=> setPresonal(false)}>Group</button>
                        </div>
                    </div>
                </div>
                <div className='chat-conyent home-com home-com-chat2'>

                <div className='chat-load'> { isPersonal ? 
                    <Personal />:  
                    <Group />} 
                </div>   

                    <CreateChat modalTitle={`Create ${isPersonal ? 'Personal Chat': 'Groups Chat'}`} isPersonal={!isPersonal}/>
                </div>
            </div>    
        </div>
        </Provider>
        
    )
}

export default Chat
