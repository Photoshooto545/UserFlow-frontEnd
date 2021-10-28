import React, {useState} from 'react'
import './Thanks.css'
import ty from './ty-photo.PNG'
import {IoCloseSharp} from 'react-icons/io5'

export default function Thanks_popup() {
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
                        <p>Thank you</p>
                        <IoCloseSharp class="ic"/>
                    </div>
                    <div class="contents">
                        <img src={ty} alt="ty"/>
                        <p className="ty-msg">
                            Thank you for sending photographer photos. 
                            You will get notified if client send selected photos
                        </p>
                        <button class="done-btn">Done</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}
