import React from 'react'
import './chattype.css'
import { Link } from 'react-router-dom'



const Personal = () => {
    return (
        <div>
            <ul>
                <Link to='chat/:id'>
                <li className='chat-profile'>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='user-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                            </div>
                        </div>
                        <div className='col-8'>
                            <div>
                                <strong className='user-name'>Ab Etmadi & Mustafa Aswadi</strong>
                                <p className='user-text'>hi ab what are do? ... </p>
                            </div>
                        </div>
                        <div className='col-1'>
                            <small className='message-time-chattype'>6:50PM</small>
                        </div>
                    </div>
                </li>
                </Link>


                <Link to='chat/:id'>
                <li className='chat-profile'>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='user-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                            </div>
                        </div>
                        <div className='col-8'>
                            <div>
                                <strong className='user-name'>Edris Danesh</strong>
                                <p className='user-text'>hi ab what are do? ... </p>
                            </div>
                        </div>
                        <div className='col-1'>
                            <small className='message-time-chattype'>6:51PM</small>
                        </div>
                    </div>
                </li>
                </Link>





                <Link to='chat/:id'>
                <li className='chat-profile'>
                    <div className='row'>
                        <div className='col-2'>
                            <div className='user-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                </svg>
                            </div>
                        </div>
                        <div className='col-8'>
                            <div>
                                <strong className='user-name'>Frezad Nazery</strong>
                                <p className='user-text'>hi ab what are do? ... </p>
                            </div>
                        </div>
                        <div className='col-1'>
                            <small className='message-time-chattype'>6:50PM</small>
                        </div>
                    </div>
                </li>
                </Link>










            </ul>
        </div>
    )
}

export default Personal
