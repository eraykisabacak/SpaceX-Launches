import React from 'react';
import logo from './logo.svg';
import './App.css';
import Past from "./components/Past";
import Next from './components/Next';
import Header from './components/Headers';
import car from './images/backg.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {
    Container
} from 'semantic-ui-react';

function App() {
    return (
    <div className="App" styles={{ backgroundImage:`url(${car})` }}>
      <Header className="header"/>
        <Router>
            <div>
                <Route path="/" component={Next} exact />
                <Route path="/next" component={Next} exact />
                <Route path="/past" component={Past} exact />
            </div>
        </Router>
    </div>
  );
}

export default App;
