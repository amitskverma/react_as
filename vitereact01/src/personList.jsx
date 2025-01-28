import React, { useState, useEffect } from 'react';
import { getPersons } from './apiService'; 
import './app.css';

const PersonList = () => {
  const [user, setPersons] = useState([]);

  useEffect(() => {
    const fetchPersons = async () => {
      const fetchedPersons = await getPersons();
      setPersons(fetchedPersons);
    };
    fetchPersons();
  }, []); 

  
return (
<div className="container">
    <h1>User Details</h1>
    <div className="flashcard-container">
    {user.map((item, index) => (
        <div className="flashcard" key={item.id || `user-${index}`}>
            <h2>{item.name}</h2>
            <p><span className="label">Age:</span> {item.age}</p>
            <p><span className="label">Work:</span> {item.work}</p>
            <p><span className="label">Mobile:</span> {item.mobile}</p>
            <p><span className="label">Email:</span> {item.email}</p>
            <p><span className="label">Address:</span> {item.address}</p>
            <p><span className="label">Username:</span> {item.username}</p>
        </div>
    ))}
</div>
</div>
    
  );
};

export default PersonList;