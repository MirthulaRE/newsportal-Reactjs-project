import React, { useState } from 'react';
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleLogin = () => {
    if (username.trim() !== '' && password.trim() !== '') {
      onLogin(true);
    } else {
      setError('Please enter a valid username and password.');
    }
  };
  return (
    <div className="login-container">
      <h2>Login to access the news portal</h2>
      {error && <p className="error">{error}</p>}
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
export default Login;
