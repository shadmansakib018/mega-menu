import React from 'react';
import Navbar from './components/Navbar/Navbar';
//@ts-ignore
import Fade from 'react-reveal/Fade';
import NavbarTwo from './components/Navbar2/NavbarTwo';

function App() {
  return (
    <div className='bg'>
      {/* <Navbar /> */}
      <NavbarTwo/>
      <div style={{margin:'40px', paddingLeft:'20px'}}>
          <ul >
            <li>First Item</li>
            <li>Another Item</li>
            <li>Last Item</li>
            <li>First Item</li>
            <li>Another Item</li>
            <li>Last Item</li>
            <li>First Item</li>
            <li>Another Item</li>
            <li>Last Item</li>
            <li>First Item</li>
            <li>Another Item</li>
            <li>Last Item</li>
            <li>First Item</li>
            <li>Another Item</li>
            <li>Last Item</li>
          </ul>
      </div>
    </div>
  );
}

export default App;
