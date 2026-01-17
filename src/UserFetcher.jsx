import React, { useState, useEffect } from 'react';

const UserFetcher = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // for cleanup
    const signal = controller.signal;

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', { signal });
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchUsers();

    // Cleanup function to abort fetch on unmount
    return () => {
      controller.abort();
    };
  }, []); // runs once on mount

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error fetching users: {error}</p>;
  }

  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserFetcher;