import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Timeline from './components/Timeline';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/' element={<Timeline />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
