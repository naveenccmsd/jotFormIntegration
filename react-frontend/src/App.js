import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ClientFormsComponent from './components/ClientFormsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import './App.css';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" component = {ClientFormsComponent}></Route>
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
