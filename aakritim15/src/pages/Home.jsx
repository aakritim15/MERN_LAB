import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/common.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <h1>Home Page</h1>
      <button className="button" onClick={() => navigate('/form')}>User Profile Form</button>
      <button className="button" onClick={() => navigate('/tasks')}>Task Manager</button>
      <button className="button" onClick={() => navigate('/profile')}>User Profile Manager</button>
    </div>
  );
};

export default Home;
