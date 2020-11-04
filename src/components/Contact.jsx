import React, { useState } from 'react';
import Navbar from './Navbar'
import './Contact.css'

const Contact = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    console.log(lastName)
    let handleFN = (event) => {
        setFirstName(event.target.value)
    }
    let handleLN = (event) => {
        setLastName(event.target.value)
    }
    let handleEmail = (event) => {
        setEmail(event.target.value)
    }
    let handleMessage = (event) => {
        setMessage(event.target.value)
    }
    let handleSubject = (event) => {
        setSubject(event.target.value)
    }
    return (
        <div className='Contact'>
            <div id='contact-banner'>
                <Navbar />
            </div>
            <div className='main'>
                <div>Contact me using the form below. I look forward to hearing from you.</div>
                <form>
                    <label>
                        <input id='firstName'placeholder='First Name*' type='text' value={firstName} onChange={handleFN} aria-required='true'/>
                        <input id='lastName' placeholder='Last Name*' type='text' value={lastName} onChange={handleLN} aria-required='true'/>
                    </label>
                    <input id='Email' placeholder='Email*' type='text' value={email} onChange={handleEmail} aria-required='true'/>
                    <input id='Subject' placeholder='Subject*' type='text' value={subject} onChange={handleSubject} aria-required='true'/>
                    <div>Message</div>
                    <textarea id='Message' value={message} onChange={handleMessage} aria-required='true'/>
                </form>
                <div>
                    ADD HANDLES TO THE BOTTOM OF THIS PAGE
                </div>
            </div>
        </div>
    );
}

export default Contact;