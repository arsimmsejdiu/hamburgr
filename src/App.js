import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Home from './components/Home';
import Opportunities from './components/Opportunities';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper" >
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/opportunities" component={Opportunities} />
                <Route path="/solutions" component={Solutions}/>
                <Route path="/contact" component={Contact}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
