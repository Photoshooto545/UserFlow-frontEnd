import React, {useState} from 'react'
import './popup3.css'
import payment from './payment.PNG'

export default function Popup3() {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button className="open-btn" onClick={togglePopup}>Click here</button>
            {isOpen && <div className="my-modal">
                <div className="modal-content">
                    <p className="successful-msg">Payment successful</p>
                    <img src={payment} alt="payment image"/>
                    <p className="ty-msg">Thank you for your subscription</p>
                    <button type="submit" className="home-btn">Home</button>
                </div>
            </div>}
        </div>
    )
}
