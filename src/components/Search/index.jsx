// Caja de búsqueda de la página principal. El componente Search recibe por props un children que es el texto del botón de búsqueda.
// El componente Search tiene un estado que es el valor del input de búsqueda.
// Cuando el usuario escribe en el input, se actualiza el estado del componente.
// Cuando el usuario pulsa el botón de búsqueda, se ejecuta la función onSubmit que recibe por props.
// En este caso, la función onSubmit es la que se encarga de hacer la petición a la API para obtener las noticias que coincidan con el término de búsqueda.

import { useState } from 'react';

const Search = ({ onSubmit, children }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form className='search' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Buscar'
        value={search}
        onChange={handleChange}
      />
      <button type='submit'>{children}</button>
    </form>
  );
};

export default Search;
