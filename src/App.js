import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          <Switch>
            <Route path="/room/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h2>Welcome</h2>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
