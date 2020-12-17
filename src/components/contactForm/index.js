import React, { useState } from "react";
import "../contactForm/contactForm.css"
import { db } from "../firebase/firebase";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection('contacts').add({
            
            name:name,
            email:email,
            message:message,
        })
        .then(() => {
            alert("We have received your feedback, thank you!");
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <form className ="form" onSubmit={handleSubmit}>
            <h1>Contact Form</h1>
            <label>Name</label>
            <input placeholder = "Name" value={name} onChange={(e) => setName(e.target.value)} required />

            <label>Email</label>
            <input placeholder = "Email" value={email} type = "email" onChange={(e) => setEmail(e.target.value)} required />

            <label>Feedback</label>
            <textarea placeholder = "Feedback..." value={message} onChange={(e) => setMessage(e.target.value)} required />

            <button type="submit" style={{ background : loader ? "#ccc " : "rgb(2,2,110)" }}> Submit</button>

        </form>
    )
}

export default Contact;