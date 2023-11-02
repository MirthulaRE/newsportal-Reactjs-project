import React, { useState } from 'react';

const Contact = () => {
  const [user, setUser] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
  });

  const [error, setError] = useState('');

  const data = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const validateEmail = (email) => {
    // A simple email validation pattern
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  const senddata = async (e) => {
    e.preventDefault();

    if (!user.Name || !user.Email || !user.Subject) {
      setError('Please fill in all required fields (Name, Email, Subject)');
      return;
    }

    if (!validateEmail(user.Email)) {
      setError('Please enter a valid email address');
      return;
    }

    setError(''); // Clear any previous error messages

    const { Name, Email, Subject, Message } = user;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Name,
        Email,
        Subject,
        Message,
      }),
    }

    try {
      const res = await fetch('https://news-portal-contact-default-rtdb.firebaseio.com/Message.json', options);
      if (res.ok) {
        alert('Your message has been sent');
      } else {
        alert('Error: Your message could not be sent');
      }
    } catch (error) {
      alert('Error: Your message could not be sent');
    }
  }

  return (
    <>
      <div className='contact_container'>
        <div className='contant'>
          <h2># Contact us</h2>
          <div className='form'>
            <form method='POST'>
              <input
                type='text'
                name='Name'
                value={user.Name}
                placeholder='Enter Your Full Name'
                required
                autoComplete='off'
                onChange={data}
              />
              <input
                type='email'
                name='Email'
                value={user.Email}
                placeholder='Enter Your Full E-mail'
                autoComplete='off'
                onChange={data}
              />
              <input
                type='text'
                name='Subject'
                value={user.Subject}
                placeholder='Enter Your Full Subject'
                autoComplete='off'
                onChange={data}
              />
              <textarea
                name='Message'
                value={user.Message}
                placeholder='Your Message'
                autoComplete='off'
                onChange={data}
              />
              {error && <div className="error">{error}</div>}
              <button type='submit' onClick={senddata}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
