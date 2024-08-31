import React from 'react';
import './App.css';
import Signin from './signIn';

import {BrowserRouter, Routes, Route } from 'react-router-dom'
import FormInput from './FormInput';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element = {<Signin />}/>
          <Route path="/signin" element={<Signin />} />
          <Route path="/form" element={<FormInput />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
