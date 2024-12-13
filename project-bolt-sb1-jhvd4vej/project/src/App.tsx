import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header/Header';
import { LandingPage } from './pages/LandingPage';
import { MainUserPage } from './pages/MainUserPage';
import { CompatibilityTool } from './components/CompatibilityTool';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<MainUserPage />} />
          <Route path="/compatibility" element={<CompatibilityTool />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
