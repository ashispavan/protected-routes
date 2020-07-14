import React from "react";
import "./App.css";
import Dashboard from "./Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={Login} />
            <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
