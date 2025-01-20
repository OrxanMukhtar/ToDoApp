import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import TodoApp from './assets/pages/todopage.js';
import TodoApp from '../src/assets/pages/todopage.js'


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>


      <Route path="/" element={<TodoApp />} />




      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
