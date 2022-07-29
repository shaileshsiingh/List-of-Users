import React from 'react';

const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      {users.map(user => (
        <p key={user.id} >
                   <p> <strong>{user.first_name}</strong></p>
         <p> <strong>{user.email}</strong></p>
          <img key={user.avatar} src={user.avatar} />

        </p>
      ))}
    </div>
  );
};

export default Users;