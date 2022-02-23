import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import { Link, Route, Router, Routes } from 'solid-app-router';
import Home from './home/Home';
import Navbar from './common/Navbar';

const App: Component = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*all" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
