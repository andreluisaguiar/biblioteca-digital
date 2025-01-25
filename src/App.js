import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroScreen from "./components/IntroScreen";
import LoginScreen from "./components/LoginScreen";
import CadastroScreen from "./components/CadastroScreen";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/cadastro" element={<CadastroScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
