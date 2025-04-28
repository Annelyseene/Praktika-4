import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import './App.css'; // Импорт стилей


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:alpha3Code" element={<CountryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
