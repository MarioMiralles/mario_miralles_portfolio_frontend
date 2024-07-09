/*========
    APP
========*/
// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ProjectList from "./components/ProjectList/ProjectList";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.scss"

export default function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <ContactForm />
      </div>
    </BrowserRouter>
  );
}
