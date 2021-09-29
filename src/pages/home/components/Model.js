import React from 'react'
import './modal.css'
import ReactDom from 'react-dom'

const ModalOverlay = props =>{
    const content = (
        <div className={`modal ${props.className}`} style={props.style}>
            <header className={`modal-header ${props.headerClass}`}>
                <h2>{props.header}</h2>
            </header>
            <form onSubmit={props.onSubmit ? props.onSubmit: enent => enent.preventDefault}>
                <div className={`modal-content ${props.contentClass}`}>
                    {props.children}
                </div>
                <footer className={`modal-footer ${props.footerClass}`}>
                    {props.footer}
                </footer>
            </form>
        </div>
    )
    return ReactDom.createPortal(content, document.getElementById('modal-hook'))
};


const Model = (props) => {
    return (
        <div>
            
        </div>
    )
}

export default Model
