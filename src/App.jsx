/*========
    APP
========*/
// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import ProjectList from "./components/ProjectList/ProjectList";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.scss"

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectList />} />
        <Route path="/projects/:id" element={<ProjectList />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
}
