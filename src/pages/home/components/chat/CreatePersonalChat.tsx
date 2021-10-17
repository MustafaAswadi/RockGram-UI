import React,{ useState } from 'react'
import Modal from '../../../../shared/Modal'
import Axios from 'axios'

class CreatePersonalChat extends React.Component {
    render() { 
        return (
            <Modal title='Create Personal Chat' id='addchat'>
            <form className="login-form cart" >
                
                <div className="mb-3">
                    <input type="email" className="form-control" id="Email1" placeholder="Email" aria-describedby="emailHelp"/>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-danger btn-login">Create</button>
                </div>
            </form>
        </Modal>
        );
    }
}
 
export default CreatePersonalChat;

