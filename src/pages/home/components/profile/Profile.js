import React from 'react'
import './Profile.css'
import PresonalChatIcon from '../../../../shared/PresonalChatIcon'
import EditeProfile from './EditeProfile'


const Profile = (props) => {
    return (
        <div className='col-2'>
            <div className='home-com profile-seaction'>
                <div className='profile-content'>
                    <div className='user-icon recevier-icon' style={{backgroundColor:'#c57ef7'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                    </div>
                    <div className='user-name'>
                        <strong>{props.chatUserName}</strong>
                    </div>
                    <div className='user-email'>
                        <p>{props.chatUserEmail}</p>
                    </div>
                    <div className='user-action'>
                    
                        {/* <button type="button" className="btn btn-logout">Log Out</button> */}
                    </div>
                    
                </div>
            </div>
            

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
