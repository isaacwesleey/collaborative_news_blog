import React, { useState } from 'react';

function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email submitted:', email);
    // Aquí puedes enviar el correo electrónico a través de una llamada a la API.
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Suscríbete a nuestro boletín</label>
      <input
        type="email"
        id="email"
        placeholder="Introduce tu correo electrónico"
        value={email}
        onChange={handleChange}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

export default NewsletterForm;
