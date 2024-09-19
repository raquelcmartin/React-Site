import React, { useState } from 'react';
import '../../App.css';
import '../../style/Contact.css'; 
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Form Submission - EmailJS)
    console.log('Form data submitted:', formData);

    emailjs.sendForm('service_3qs7u1e', 'template_k649zyy', e.target, 'wkvbnJ1wNVSjSkTzH')
    .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log(error.text);
        alert('Failed to send message.');
    });

  // clear the form after submission
  setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className='contact-container'>
      <h1 className='contact-heading'>CONTACT ME</h1>
      <form onSubmit={handleSubmit} className='contact-form'>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
          className='contact-input'
        />
        
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
          className='contact-input'
        />
        
        <label htmlFor='message'>Message</label>
        <textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          required
          className='contact-textarea'
        />

        <button type='submit' className='contact-button'>Send Message</button>
      </form>
    </div>
  );
}
