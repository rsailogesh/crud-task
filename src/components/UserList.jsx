import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/api';
import UserItem from './UserItem';

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="user-list"> {/* Add className here */}
      <h2>User List</h2>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onEdit={onEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default UserList;

