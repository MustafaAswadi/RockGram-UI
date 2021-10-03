import React from 'react'
import './Profile.css'
import PresonalChatIcon from '../../../../shared/PresonalChatIcon'
import EditeProfile from './EditeProfile'
import ChatProfile from './ChatProfile'


const Profile = (props) => {
    return (
        <div className='col-2'>
            <ChatProfile/>
            

            <div className='home-com profile-seaction'>
                <div className='profile-content'>
                    <PresonalChatIcon width='60'/>
                    <div className='user-name'>
                        <strong>{props.userName}</strong>
                    </div>
                    <div className='user-email'>
                        <p>{props.userEmail}</p>
                    </div>
                    <EditeProfile/>
                    
                </div>
            </div>
            
            
        </div>
        
    )
}

export default Profile
