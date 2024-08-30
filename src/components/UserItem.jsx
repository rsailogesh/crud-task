import React from 'react';

const UserItem = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-item"> {/* Add className here */}
      <p>{user.name} - {user.email}</p>
      <button onClick={() => onEdit(user)}>Edit</button>
      <button className="delete" onClick={() => onDelete(user.id)}>Delete</button> {/* Add className="delete" */}
    </div>
  );
};

export default UserItem;
