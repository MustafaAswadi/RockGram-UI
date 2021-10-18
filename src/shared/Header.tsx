import React from 'react';
import em1 from '../assets/img/em1.png'
import em2 from '../assets/img/em2.png'

interface HeaderProps {
    style: any
}
 
 
class Header extends React.Component<HeaderProps> {
    render() { 
        const {style} =this.props
        return <h1 style={style} >Welcome to<img src={em2}  style={{width:"70px"}} alt='main img'/> <span>RockGram<img src={em1} style={{width:"100px"}} alt='img'/></span> <em>!</em></h1>

    }
}
 
export default Header;
