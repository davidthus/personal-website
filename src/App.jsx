import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "./App.style";
import Navbar from "./components/Navbar/Navbar";
import Ribbon from "./components/Ribbon/Ribbon";
import Home from "./Pages/Home/Home";
const About = lazy(() => import("./Pages/About/About"));
const Projects = lazy(() => import("./Pages/Projects/Projects"));

function App() {
  return (
    <Container>
      <Ribbon />
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
      <Navbar />
    </Container>
  );
}

export default App;
