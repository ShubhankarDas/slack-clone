import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";
import Message from "./Message";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <h1>Login page</h1>
        ) : (
          <>
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
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
