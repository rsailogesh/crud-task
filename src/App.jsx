import React, { useState } from 'react';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './App.css'; // Import the CSS file

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  const handleEditUser = (user) => {
    setCurrentUser(user);
  };

  const handleSaveUser = () => {
    setCurrentUser(null);
  };

  const handleClearForm = () => {
    setCurrentUser(null);
  };

  return (
    <div className="container"> {/* Add className here */}
      <h1>User Management App</h1>
      <UserForm currentUser={currentUser} onSave={handleSaveUser} onClear={handleClearForm} />
      <UserList onEdit={handleEditUser} />
    </div>
  );
};

export default App;
