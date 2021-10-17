import React,{ useState } from 'react'
import Modal from '../../../../shared/Modal'
import Axios from 'axios'


async function createPersonalChat(data) {
   

    return (
        <Modal title='Create Personal Chat' id='addchat'>
        <form className="login-form cart" onSubmit={}>
            
            <div className="mb-3">
                <input type="email" className="form-control" id="Email1" placeholder="Email" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}/>
            </div>
            <div className="d-grid gap-2">
                <button type="submit" className="btn btn-danger btn-login">Create</button>
            </div>
        </form>
    </Modal>
    )
}

export default CreatePersonalChat
