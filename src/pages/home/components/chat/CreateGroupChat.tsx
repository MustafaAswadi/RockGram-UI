import React from 'react'
import Modal from '../../../../shared/Modal'


class CreateGroupChat extends React.Component {
    render() { 
        return (
            <Modal title='Create Groups Chat' id='addchat'>
            <form className="login-form cart" >
                <div className="mb-3">
                    <input type="text" className="form-control" id="chatName" placeholder="Groups Name"/>
                </div>
                <div className="mb-3">
                        <input type="email" className="form-control" id="Email1" placeholder="Email" aria-describedby="emailHelp" />
                </div>
               
                    <div className="mb-3" >
                        <input type="email" className="form-control" id={`email44`} placeholder="Email" aria-describedby="emailHelp" />
                    </div>
              
                <button className='addMembertoGroups'>+</button>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-danger btn-login">Create</button>
                </div>
            </form>
        </Modal>
        )
    }
}
 
  

export default CreateGroupChat
