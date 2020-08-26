import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Wallpaper from './components/Wallpaper';
import "./css/global.css";

export default function App() {
  return (
    <>
      <Navbar />
      <header className="header">
        <div className="container">
          <Intro />
          <Wallpaper />
        </div>
      </header>
    </>
  )
}

