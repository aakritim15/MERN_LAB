import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/common.css';

const Form = () => {
  const [details, setDetails] = useState({ username: '', age: '', email: '' });
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const toggleState = (e) => {
    e.preventDefault();
    setLoading(!loading);
  };

  const resetFields = (e) => {
    e.preventDefault();
    setDetails({ username: '', age: '', email: '' });
  };

  const hideForm = (e) => {
    e.preventDefault();
    setLoading(!loading);
  };

  const logout = () => {
    navigate('/');
  };

  return (
    <div className="wrapper">
      {loading ? (
        <form>
          <h1>User Profile Form</h1>
          <div className="Form">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={details.username}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={details.age}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={details.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="buttons">
            <button className="button" onClick={toggleState} type="button">SUBMIT</button>
            <button className="button" onClick={resetFields} type="button">RESET</button>
            <button className="button" onClick={hideForm} type="button">HIDE FORM</button>
          </div>
        </form>
      ) : (
        <>
          <div className="info">
            <h2>User Information</h2>
            <p><strong>Username:</strong> {details.username}</p>
            <p><strong>Age:</strong> {details.age}</p>
            <p><strong>Email:</strong> {details.email}</p>
          </div>
          <div className="buttons">
            <button className="button" onClick={toggleState}>Edit Information</button>
          </div>
        </>
      )}
      <button className="logout-button" onClick={logout}>Logout</button>
    </div>
  );
};

export default Form;
