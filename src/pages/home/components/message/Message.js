import React from 'react'
import { Provider } from 'react-redux'
import MessageContainer from './MessageContainer'
import messagestore from './redux/messagestore'

const Message = () => {
    return (
        <div className='col-6'>
            <Provider store={messagestore}>
                <MessageContainer />
            </Provider>
        </div>
    

    )
}

export default Message
