import React from "react";
import { Route, Redirect } from "react-router-dom";
import "./App.css";
import AuthForm from "./containers/AuthForm";
import NextPage from "./containers/NextPage";

const App = () => {
  return (
    <div className="App">
      <Redirect from="/" to="/auth-app/" />
      <Route path="/auth-app/" exact component={AuthForm} />
      <Route path="/auth-app/next-page" exact component={NextPage} />
    </div>
  );
};

export default App;
