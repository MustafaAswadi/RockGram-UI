import React from 'react'
import './Profile.css'
import footerimg from '../../../assets/img/footerimg.svg'
import Modal from './Modal'


const Profile = () => {
    return (
        <div className='col-2'>
            <div className='home-com profile-seaction'>
                <div className='profile-content'>
                    <div className='user-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                    </div>
                    <div className='user-name'>
                        <strong>Ab Etemadi</strong>
                    </div>
                    <div className='user-email'>
                        <p>ab.etemadi@yahoo.com</p>
                    </div>
                    <div className='user-action'>
                    <button type="button" class="btn  edite-profile" data-bs-toggle="modal" data-bs-target="#editeProfile">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
                            <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
                        </svg>
                    </button>
                        <button type="button" class="btn btn-logout">Log Out</button>
                    </div>
                    
                </div>
            </div>
            <div className='footerimg'>
                <img src={footerimg}/>
            </div>
            <Modal title='Edita Profile' id='editeProfile'>
                <div className='cart'>
                    <form class="login-form" >
                        <div class="mb-3">
                            <input type="text" class="form-control" id="fullname" placeholder="full Name"/>
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control" id="Email" placeholder="Email" aria-describedby="emailHelp"/>
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-danger btn-login">Submit</button>
                        </div>
                    </form>
                    <hr/>
                    <div class="d-grid gap-2">
                        <button class="btn btn-outline-danger" data-bs-target="#changepassword" data-bs-toggle="modal" data-bs-dismiss="modal">Change Password</button>
                    </div>
                </div>
            </Modal>
            <Modal title='Change Password' id='changepassword'>
                <div className='cart'>
                    <form class="login-form" >
                        <div class="mb-3">
                            <input type="password" class="form-control" id="oldpass" placeholder="Current Password"/>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="newpass" placeholder="New Password"/>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="confirmpass" placeholder="Confirm Password"/>
                        </div>
                        <div class="d-grid gap-2">
                            <button type="submit" class="btn btn-danger btn-login">Submit</button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
        
    )
}

export default Profile
