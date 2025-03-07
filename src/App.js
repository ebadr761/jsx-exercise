import React from 'react';
import './App.css';
// import components
import Home from './Home.js';
import Contact from './Contact.js';
import About from './About.js';
import EngineeringTopics from './EngineeringTopics.js';

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

      <Home heading="Welcome to the Home Page!" description="Welcome to our website." />
      <About heading="About Us" description="We are passionate about delivering quality experiences."/>
      <Contact heading="Contact Us" description="Feel free to reach out to us via email or phone." />

      <EngineeringTopics />

    </div>
  );
}

export default App;
