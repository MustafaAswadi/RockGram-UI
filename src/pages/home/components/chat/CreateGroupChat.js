import React,{ useState } from 'react'
import Modal from '../../../../shared/Modal'
import Axios from 'axios'


async function createGroupChat(data) {
   
  


    return (
        <Modal title='Create Groups Chat' id='addchat'>
        <form className="login-form cart" onSubmit={}>
            <div className="mb-3">
                <input type="text" className="form-control" id="chatName" placeholder="Groups Name" onChange={}/>
            </div>
            <div className="mb-3">
                    <input type="email" className="form-control" id="Email1" placeholder="Email" aria-describedby="emailHelp" />
            </div>
            {/* {emails.map((value, index)=>( */}
                <div className="mb-3" key={index}>
                    <input type="email" className="form-control" id={`email${index}`} placeholder="Email" aria-describedby="emailHelp" onChange={(val)=>{onchangeInput(val, index)}}/>
                </div>
            {/* ))} */}
            <button className='addMembertoGroups' onClick={}>+</button>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-danger btn-login">Create</button>
            </div>
        </form>
    </Modal>
    )
}

export default CreateGroupChat
