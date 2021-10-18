
import appstore from '../assets/img/appstore.png'
import googleplay from '../assets/img/googleplay.png'

const Getapp = () => {
    return (
        <div className='getapp-secation'>
            <div className='row'>
                <p>Get the app.</p>
                <div className='col'>
                    <img src={appstore} alt="rockgram logo"  className='get-app-img'  />
                </div>
                <div className='col'>
                    <img src={googleplay} alt="rockgram logo"  className='get-app-img'  />
                </div>
            </div>
        </div>
    )
}

export default Getapp
