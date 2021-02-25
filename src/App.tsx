import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <div className="App">
            {/* <Navbar /> */}
            <div className="container">
              <Switch>
                <Route exact path="/" component={Layout} />
                {/* <Route exact path= "/lyrics/track/:id" component={Lyrics} /> */}
              </Switch>
            </div>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
