/*=================
    CONTACT FORM
=================*/
// src/components/ContactForm/ContactForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.scss'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://3.142.122.193:8000/api/contact/', formData)
            .then(response => {
                alert('Message sent successfully! Please allow up to 48 hours for a response to the email provided.');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(error => {
                console.error('Error sending message: ', error);
            });
    };

    return (
        <main className='form__container'>
            <h1 className="form__title">📨 Get in touch</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form__group">
                    <label>Message:</label>
                    <textarea
                        className='form__textarea'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <button className="form__button" type="submit">Send</button>
            </form>
        </main>
    );
};

export default ContactForm;
