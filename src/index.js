import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PetDetailsPage from './pages/detail';
import SearchPage from './pages/search';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import reportWebVitals from './reportWebVitals';

const { worker } = require('./mocks/browser');
worker.start();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:type" element={<App />} />
        <Route path="/:type/:id" element={<PetDetailsPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/pet-details-not-found" element={<PetDetailsNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
