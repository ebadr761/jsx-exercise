import React from 'react';
import './App.css';
// import components
import '.Home.js';
import '.Contact.js';
import '.About.js';

function newComponent(isLoggedIn) {
  return isLoggedIn ? <p>Welcome back!</p> : <p>Please login.</p>;
}
function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;
  return (
    <div className="App">
      <h1>ENSF-381: Full-Stack Web Development</h1>
      <p>React Components</p>
      <p>{currentYear}</p>
      <p> {newComponent(isLoggedIn)}</p>

      <Home />
      <Contact />
      <About />
    </div>
  );
}

export default App;
