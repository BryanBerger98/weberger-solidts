import type { Component } from 'solid-js';
import { Route, Routes } from 'solid-app-router';
import Home from './home/Home';
import Navbar from './common/Navbar';
import Skills from './skills/Skills';
import Projects from './projects/Projects';

const App: Component = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/*all" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
