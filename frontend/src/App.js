import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import FirstPage from "./pages/FirstPage";
import Header from "./components/Header/Header"
import UserContext from "./context/Auth/UserContext"

function App() {
  return (
    <div className="App">
      <UserContext>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <FirstPage />
          </Route>
        </Switch>
      </UserContext>
    </div>
  );
}

export default App;
