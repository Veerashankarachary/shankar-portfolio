import React from 'react';
import './App.css';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from './navbar';
function App() {
  return (
    <div className="App">
      <Navbar /> {/*Add the Navbar component */}
      <Header /> 
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
