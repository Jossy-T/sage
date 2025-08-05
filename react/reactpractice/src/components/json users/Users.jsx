import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
                <p> id:"{user.id}"</p>
                <strong style={{display:"block"}}><p> Name:"{user.name}"</p></strong> 
                <p>Email:"{user.email}"</p>
                <p>phoneNumber:"{user.phone}"</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
