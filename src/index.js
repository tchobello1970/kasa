import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Gallery from './pages/Gallery'
import Footer from './components/Footer'
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery/:flatNumber" element={<Gallery />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>

    <Home />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
