import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store";
import Index from "./components/Index/Index";
import Home from "./components/Home/Home";
import Redirect from "./components/Redirect/Redirect";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <div className="App">
            <ToastContainer />
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/redirect" component={Redirect} />
                <Route exact path="/home" component={Home} />
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
