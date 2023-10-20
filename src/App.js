import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Bid from './pages/Bid';

import EthereumProvider from './EthereumProvider'

const App = () => {
  return (
    <EthereumProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bid/:id" element={<Bid />} />
      </Routes>
    </Router>
  </EthereumProvider>
  );
}

export default App;
