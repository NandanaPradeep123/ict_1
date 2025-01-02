import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductDashboard from './components/ProductDashboard';
import AddProductForm from './components/AddProductForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductDashboard />} />
        <Route path="/add-product" element={<AddProductForm />} />
      </Routes>
    </Router>
  );
}

export default App;