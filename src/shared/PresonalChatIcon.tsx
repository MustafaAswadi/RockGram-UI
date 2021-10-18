import React from 'react'

interface PersonalChatIconProps {
   width:any 
}

 
class PersonalChatIcon extends React.Component<PersonalChatIconProps> {

    render() { 
        const { width } = this.props
        return (
        
            <div className='user-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" width={width} height={width} fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </div>
        
    )
    }
}
 
export default PersonalChatIcon;


