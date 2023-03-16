import React from 'react';
import 'animate.css';
import "bulma/css/bulma.css";
import './theme.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ClientFormsComponent from './components/ClientFormsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

function App() {
  return (
    <div>
      <Router>

        <HeaderComponent />
        <div className="container">
          <Routes >
            <Route exact path="/" element={<ClientFormsComponent />} />
            <Route exact path="/login" element={<ClientFormsComponent />} />
          </Routes>
        </div>
        <FooterComponent />

      </Router>
    </div>

  );
}

export default App;
