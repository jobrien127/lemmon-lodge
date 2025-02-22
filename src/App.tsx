import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import TabBar from './components/TabBar/TabBar';

function App() {
  return (
    <Router>
      <div className="App">
        <TabBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
