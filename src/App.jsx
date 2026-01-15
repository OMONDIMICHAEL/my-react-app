import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Greeting from './Greeting'
// import Gallery from './Gallery'
// import Counter from './Counter';
// import Toggle from './Toggle';
// import TextInput from './TextInput';
import DataFetcher from './DataFetcher';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Greeting/> */}
        <h1>useEffect Basics - Data Fetching</h1>
        {/* <Gallery/> */}
        {/* <Counter/>
        <Toggle/>
        <TextInput/> */}
        <DataFetcher/>
      </div>
    </>
  );
}

export default App
