import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import { NovoComponente } from './components/pdf';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="pdf" element={<NovoComponente /> } />
      </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
