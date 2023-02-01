import { useState } from 'react';
import axios from 'axios';

const projectID = '57605301-a18e-4ddb-9fb8-b53b11398b2f';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Muggle Space</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center" className="pk">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
            <p>For Visitor: Sign in with</p>
            <p><b>Username: Visitor</b></p>
            <p><b>Password: password</b></p>
          </div>
          <div className="developer">
            <h6>Developed by Sunami Dasgupta & Alessandro Sisniegas</h6>
          </div>
        </form>
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Modal;
