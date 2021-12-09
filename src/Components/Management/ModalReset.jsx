import React, {useState} from "react";
import './management.scss';  

import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
export const ModalReset = () => {
    const [sidebar, setSidebar] = useState(false);  
    const showSidebar = () => setSidebar(!sidebar);  
   
    return (
        <>
            <div className={sidebar ? 'modalcont active' : 'modalcont'}> 
                <Modal.Header closeButton>
                    Reset Password
                </Modal.Header>
                <Modal.Body className="modalOne"> 
                    <p>
                        Do you wish to reset the Password of <a>Julian Leudesdorff</a> ? 
                    </p>
                    <p>
                        The reset password link will be sent to  <a>julian.leudesdorff@susiandjames.com</a>
                    </p>
                    <div className="modal-btn" onClick={showSidebar}>Reset Password</div>
                </Modal.Body> 
                <Modal.Body className="modaltwo"> 
                    <p>An E-Mail with the password reset link has been sent.</p>
                    
                    <Modal.Header className="modalbooter" closeButton>
                        <div className="modal-btn" onHide={()=>{this.handleModal()}}>Ok</div>
                    </Modal.Header>
                </Modal.Body> 
            </div>
             

        </>
    )
}
