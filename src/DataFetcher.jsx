import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data with a timeout
    const fetchData = () => {
      setTimeout(() => {
        // Mock data
        const mockData = [
          { id: 1, name: 'Apple' },
          { id: 2, name: 'Banana' },
          { id: 3, name: 'Cherry' },
        ];
        setData(mockData);
        setLoading(false);
      }, 2000); // simulate 2 seconds delay
    };

    fetchData();

    // Optional: cleanup function if needed
    return () => {
      console.log('Cleanup on unmount or update');
    };
  }, []); // empty dependency array ensures this runs once on mount

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error}</p>;
  }

  return (
    <div>
      <h2>Fetched Data:</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;