import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination';
// import axios from 'axios';
import './App.css';
import Users from './components/Users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://reqres.in/api/users?page=2");
      const json = await res.json();
    setUsers(json.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // Get current posts
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Hello Users</h1>
      <Users users={currentUsers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App