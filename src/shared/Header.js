import em1 from '../assets/img/em1.png'
import em2 from '../assets/img/em2.png'


const Header = (props) => {
    return <h1 style={props.style}>Welcome to<img src={em2}  style={{width:"70px"}} alt='main img'/> <span>RockGram<img src={em1} style={{width:"100px"}} alt='img'/></span> <em>!</em></h1>
}

export default Header
