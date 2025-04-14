import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Scan } from './pages/Scan';
import { Analysis } from './pages/Analysis';
import { AnalysisProvider } from './context/AnalysisContext';

function App() {
  return (
    <AnalysisProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/scan" element={<Scan />} />
              <Route path="/analysis/:id" element={<Analysis />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AnalysisProvider>
  );
}

export default App