import React,{useState} from 'react'

const CreateMessage = () => {


    return (
        <div className='message-sender'>
            <form className="row"  >
                <div className="col-10 message-text-input">
                    <textarea className='form-control' rows='1'placeholder='Type a message' ></textarea>
                </div>
                <div className="col-2 message-text-send">
                    <button type="submit" className="btn btn-danger ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cursor-fill" viewBox="0 0 16 16">
                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"/>
                    </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateMessage
