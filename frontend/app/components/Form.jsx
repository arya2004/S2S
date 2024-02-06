"use client"
import React, { useEffect, useState } from 'react';

const Form = () => {
  const [address, setAddress] = useState('');
  const [checked, setChecked] = useState(false);

 

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address,
          checked,
        }),
      });
  
      if (response.ok) {
        console.log('Data sent successfully');
      } else {
        console.log('Error sending data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
      <label style={{ marginBottom: '10px' }}>
        Home Address:
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} style={{ marginLeft: '10px' }} />
      </label>
      <label style={{ marginBottom: '10px' }}>
        <input type="checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} style={{ marginRight: '10px' }} />
        Check me
      </label>
      <button type="submit" style={{ padding: '10px' }}>Submit</button>
    </form>
  );
};

export default Form;