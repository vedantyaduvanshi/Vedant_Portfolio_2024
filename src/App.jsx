// App.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Component/Experience';
import './App.css';
import Hello from './Component/Hello';


function App() {
  return (
    <>
        <Hello/>
       <div className="experience">
				<Experience />
			</div>
        </>
  );
}

export default App;
