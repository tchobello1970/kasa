import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './sass/Index.scss';
import Layout from './components/Layout';
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Flat from './pages/Flat'
import Footer from './components/Footer'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/flat/:flatNumber" element={<Flat />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  </React.StrictMode>
);