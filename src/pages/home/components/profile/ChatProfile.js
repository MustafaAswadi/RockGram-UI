import React from 'react'
import { Provider } from 'react-redux'
import ChatProfileContainer from './ChatProfileContainer'
import chatstore from '../chat/redux/chatstore'

const ChatProfile = () => {
    return (
        <Provider store={chatstore}>
            <div className='home-com profile-seaction'>
                <ChatProfileContainer/>
            </div>
        </Provider>
    )
}

export default ChatProfile
