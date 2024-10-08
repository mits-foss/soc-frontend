import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import About from './About';
import App from './App';
import Guidelines from './Guidelines';
import Maintainers from './Maintainers';
import Repositories from './Repositories';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/maintainers" element={<Maintainers />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </StrictMode>,
);