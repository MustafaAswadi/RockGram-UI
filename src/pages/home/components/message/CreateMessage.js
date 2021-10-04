import React,{useState} from 'react'
import Axios from 'axios'
import {useHistory} from 'react-router-dom'

async function SignUpUser(credentials) {
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhYi5ldG1hZGlAeWFob28uY29tIiwiaWF0IjoxNjMzMzMyNzU5fQ.XFpfb3ENwuDCRe0JK8mO8jc2BBI253rzDklF28JeyDw'
const queryParams = new URLSearchParams(window.location.search);
const chatId = queryParams.get('chatId');
    await Axios({
       method: 'post',
       url: `http://localhost:3002/message/${chatId}`,
       data: {text: credentials.text},
       headers: { Authorization: `Bearer ${token}` }

   }).then(res => {
       console.log(res.data);
       refreshPage();
       return res.data;
   })
   function refreshPage() {
    // setTimeout(()=>{
    //     window.location.reload(true)
    // },200)
}
}
const CreateMessage = () => {
    const history = useHistory();
    const [text, setText] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await SignUpUser({
          text
        });
        history.push('/home');
        setText('')

      }

    return (
        <div className='message-sender'>
            <form className="row"  onSubmit={handleSubmit}>
                <div className="col-10 message-text-input">
                    <textarea className='form-control' rows='1'placeholder='Type a message' onChange={e => setText(e.target.value)}></textarea>
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
