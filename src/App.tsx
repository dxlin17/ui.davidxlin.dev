import React from 'react';
import './App.scss';

import AboutMe from './components/About.tsx'
import PixelArt from './components/PixelArt.js';
import Projects from './components/Projects.tsx';


function App() {
  return (
    <div className="App">
      <header>
        <h1>David Lin</h1>
        <div className="ContactInfo">
          <p>Email: me at davidxlin.dev</p>
          <p>GitHub: https://github.com/dxlin17</p>
          <p>LinkedIn: https://www.linkedin.com/in/davidxlin/</p>
        </div>
      </header>
      <div className="Container">
        <AboutMe />
        <Projects />
        <PixelArt />
      </div>
    </div>
  );
}

export default App;
