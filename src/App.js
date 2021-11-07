import React from 'react'
import "./App.css";
import YaziListesi from './Components/YaziListesi';

import YaziDetayi from './Components/YaziDetayi';
import {Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
        <Route path="/" exact element={<YaziListesi  />}/>
        <Route path="/posts/:id" element={<YaziDetayi/>} />
    </Routes>
  );
}

export default App;