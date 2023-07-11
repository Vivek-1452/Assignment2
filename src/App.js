import React, { useState } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect } from "react";
// import { BrowserHistory } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/home";

function App() {
  // const [display, setdisplay] = useState(false);

  // useEffect(() => {
  //   if (window.innerWidth < 769) {
  //     setdisplay(true);
  //   }
  // }, [display]);

  return (
    <Router>
      <div className="App p-0">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
