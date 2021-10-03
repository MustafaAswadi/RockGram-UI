import React from 'react'
import { Provider } from 'react-redux'
import CreateMessage from './CreateMessage'
import MessageContainer from './MessageContainer'
import messagestore from './redux/messagestore'

const Message = () => {
    return (
        <div className='col-6'>
        <div className='home-com message-seaction'>
            <Provider store={messagestore}>
                <MessageContainer />
            </Provider>

            <CreateMessage/>
        </div>
    </div>
    

    )
}

export default Message
