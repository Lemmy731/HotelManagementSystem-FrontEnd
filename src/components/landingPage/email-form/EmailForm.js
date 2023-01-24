import React, { useState } from 'react';
import './EmailForm.css';

function EmailForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or email sending logic here
  }

  return (
    <form onSubmit={handleSubmit} className='contactEmail'>
      <label>
        <input
          className='inputEmail'
          placeholder='Email'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button className='btnEmail' type="submit">Submit</button>
    </form>
  );
}

export default EmailForm;