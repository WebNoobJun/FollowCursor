import './App.css';
import React, { useState } from 'react';

function App() {

  const [mouseX, setMouseX] = useState()
  const [mouseY, setMouseY] = useState()

  window.addEventListener('mousemove', (e) => {
    setMouseX(e.pageX)
    setMouseY(e.pageY)
  })

  return (
    <div className="App"> 
        <ul>
          <li>Hi</li>
          <li>how</li>
          <li>are</li>
          <li>you?</li>
        </ul>

        <div className='cursor' 
          style={{
            left: mouseX + 'px',
            top: mouseY + 'px'
        }}>
        </div>
    </div>
  );
}

export default App;
