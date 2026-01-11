import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting'
import Gallery from './Gallery'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Greeting/> */}
        <h1>my card gallary</h1>
        <Gallery/>
      </div>
    </>
  );
}

export default App
