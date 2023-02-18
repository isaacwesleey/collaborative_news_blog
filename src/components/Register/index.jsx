import { TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import validator from 'validator';
// import { useToken } from '../../TokenContext';

const Register = () => {
  //   const [token, setToken] = useToken();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Si estamos logueados redireccionamos a la página principal.
  //   if (token) return <Navigate to='/' />;

  // Función que se ejecuta cuando el usuario hace submit en el formulario.
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // Validar la dirección de correo electrónico
      if (!validator.isEmail(email)) {
        throw new Error(
          'Por favor, ingrese una dirección de correo electrónico válida.'
        );
      }
      // Validar la contraseña
      if (!password) {
        throw new Error(
          'Por favor, ingrese una contraseña. Por favor, intente de nuevo.'
        );
      }
      // Validar la longitud de la contraseña
      if (password.length < 8) {
        throw new Error(
          'La contraseña debe tener al menos 8 caracteres. Por favor, intente de nuevo.'
        );
      }

      // Confirmar la contraseña
      if (password !== confirmPassword) {
        throw new Error(
          'Las contraseñas no coinciden. Por favor, intente de nuevo.'
        );
      }

      const res = await fetch('http://localhost:3002/api/user', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const body = await res.json();

      if (body.status === 'error') {
        setErrorMessage(body.message);
      } else {
        navigate('/login');
      }
    } catch (err) {
      setErrorMessage(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='register'>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <TextField
          label='Nombre'
          variant='outlined'
          margin='normal'
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <TextField
          label='Correo electrónico'
          variant='outlined'
          margin='normal'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <TextField
          label='Contraseña'
          variant='outlined'
          margin='normal'
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <TextField
          label='Confirmar contraseña'
          variant='outlined'
          margin='normal'
          type='password'
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        {errorMessage && <Box sx={{ color: 'error.main' }}>{errorMessage}</Box>}
        <Button
          variant='contained'
          color='primary'
          type='submit'
          disabled={loading}
          onClick={handleSubmit}
        >
          Registrarse
        </Button>
      </Box>
    </main>
  );
};

export default Register;
