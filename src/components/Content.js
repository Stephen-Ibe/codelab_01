import React, { useState } from 'react';

const Content = () => {
  const [age, setAge] = useState(10);
  const [userProfile, setUserProfile] = useState({
    name: 'Kalson',
    role: 'Engineer',
    isActive: false,
    grade: 14,
  });
  const handleUserProfileUpdate = (choice, value) => {
    setUserProfile({
      ...userProfile,
      [choice]: value,
    });
  };

  return (
    <div className='container'>
      <p>
        {userProfile.name} is {age} years old and is currently a grade{' '}
        {userProfile.grade} {userProfile.role}.
      </p>
      <button onClick={() => setAge((prevState) => prevState + 10)}>
        Increase User's Age
      </button>
      <button onClick={() => handleUserProfileUpdate('name', 'Favour')}>
        Change User Data
      </button>
    </div>
  );
};

export default Content;
