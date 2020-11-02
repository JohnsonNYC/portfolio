import React, {useState} from 'react';

import './Contact.css'

const Contact = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [ email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    return ( 
        <div className='PlaceHolder'> This page is currenlty being worked on.</div>
    );
}

export default Contact;