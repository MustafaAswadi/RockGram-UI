import React from 'react'
import GroupsChatIcon from '../../../../shared/GroupsChatIcon'
import ChatDetail from './ChatDetail'

const Group = () => {
    return (
        <div>
            <ul>
                <ChatDetail>
                    <GroupsChatIcon width='30'/>
                </ChatDetail>
            </ul>
        </div>
    )
}

export default Group
