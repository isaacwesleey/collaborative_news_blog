import { useState } from 'react';
import { Navigate } from 'react-router-dom';
// import { useToken } from '../../TokenContext';

import './Login.css';

const Login = () => {
  // const [token, setToken] = useToken();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // Si estamos logueados redireccionamos a la página principal.
  // if (token) return <Navigate to='/' />;

  // Función que maneja el envío del formulario.
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch('http://localhost:3002/api/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const body = await res.json();

      if (body.status === 'error') {
        alert('Error');
      } else {
        // setToken(body.data.token);
        alert(body.token);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='login'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor='pass'>Contraseña:</label>
        <input
          type='password'
          id='pass'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength='6'
          required
        />

        <button disabled={loading}>Login</button>
      </form>
    </main>
  );
};

export default Login;
