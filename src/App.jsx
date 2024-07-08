/*========
    APP
========*/
// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProjectList from "./components/ProjectList/ProjectList";
import ContactForm from "./components/ContactForm/ContactForm";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={ProjectList} />
        <Route path="*" component={HomePage} />
      </Switch>
      <ContactForm />
    </Router>
  );
}
