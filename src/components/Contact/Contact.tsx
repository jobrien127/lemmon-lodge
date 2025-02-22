import React, { useState, useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const lastSubmissionTimeRef = useRef<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted with values:', { name, email, message });

        const currentTime = Date.now();
        if (lastSubmissionTimeRef.current && currentTime - lastSubmissionTimeRef.current < 60000) {
            alert('Please wait at least 1 minute before submitting again.');
            return;
        }

        const templateParams = {
            name,
            email,
            message,
        };

        console.log('Sending email with templateParams:', templateParams);

        setIsSubmitting(true);

        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID!,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
            templateParams,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY!
        ).then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
                lastSubmissionTimeRef.current = Date.now();
            }, (error) => {
                console.error('Failed to send email:', error);
                alert('Failed to send message. Please try again later.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="contact-container">
            <h2>Contact Site Owner</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" disabled={isSubmitting}>Submit</button>
            </form>
            <div className="contact-info">
                <h3>Contact Information</h3>
                <p>Email: owner@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
    );
};

export default Contact;
