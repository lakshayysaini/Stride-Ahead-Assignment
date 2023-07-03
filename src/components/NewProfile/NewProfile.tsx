import React, { useState } from 'react';
import { postProfile } from '../../api/api';
import './NewProfile.css';

const NewProfile = () => {
  // State variables to store the input values for name and email
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle changes in the name input
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  // Function to handle changes in the email input
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Check if name or email is empty
    if (!name || !email) {
      alert('Name and email are required');
      return;
    }

    // Call the postProfile function from the API, passing the name and email
    await postProfile({ name, email });

    // Reset the input values to empty strings after submitting
    setName('');
    setEmail('');
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for the name */}
      <input type="text" value={name} onChange={handleNameChange} placeholder="Name" required />

      {/* Input field for the email */}
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" required />

      {/* Submit button */}
      <button type="submit">Add profile</button>
    </form>
  );
}

export default NewProfile;
