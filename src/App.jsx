import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;