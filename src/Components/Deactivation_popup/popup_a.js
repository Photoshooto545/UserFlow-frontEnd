import React, {useState} from 'react'
import './popup_a.css'
import activate from './activate.PNG'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {AiOutlineArrowLeft} from 'react-icons/ai'


export default function Popup_d() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="open-btn" onClick={togglePopup}>Click here</button>
            {isOpen && <div className="my-modal">
                <div className="modal-content">
                    <div class="wrap">
                        <AiOutlineArrowLeft class="ic"/>
                        <p>Home</p>
                        <AiOutlineCloseCircle class="ic"/>
                    </div>
                    <div class="contents">
                        <img src={activate} alt="deactivate image"/>
                        <p className="ty-msg">Your account will be activated within 24 hrs.</p>
                    </div>
                </div>
            </div>}
        </div>
    )
}


