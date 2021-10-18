import React from 'react'

interface ModalProps {
    id:any,
    title: any,
    children: any
}
 

 
class Modal extends React.Component<ModalProps> {
    render() { 
        const {id, title, children} = this.props
        return (
            <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                     <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Modal;