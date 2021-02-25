import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
        <React.Fragment>
          <div className="App">
            {/* <Navbar /> */}
            <div className="container">
              <Switch>
                <Route exact path= "/" component={Layout} />
                {/* <Route exact path= "/lyrics/track/:id" component={Lyrics} /> */}
              </Switch>
            </div>
          </div>
        </React.Fragment>
      </Router>
  );
}

export default App;
