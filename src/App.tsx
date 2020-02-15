import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import AuthForm from "./containers/AuthForm";
import NextPage from "./containers/NextPage";

const App = () => {
  return (
    <div className="App">
      <Route path="/" exact component={AuthForm} />
      <Route path="/next-page" exact component={NextPage} />
    </div>
  );
};

export default App;
