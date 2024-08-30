import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../services/api';

const UserForm = ({ currentUser, onSave, onClear }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.id) {
        await updateUser(user.id, user);
      } else {
        await createUser(user);
      }
      onSave();
      setUser({ name: '', email: '' });
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}> {/* Add className here */}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
      <button className="clear" type="button" onClick={onClear}>Clear</button> {/* Add className="clear" */}
    </form>
  );
};

export default UserForm;


