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
// import DataFetcher from './DataFetcher';
import UserFetcher from './UserFetcher'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Greeting/> */}
        {/* <h1>useEffect Basics - Data Fetching</h1> */}
        <h1>useEffect Cleanup & Fetch Real API</h1>
        {/* <Gallery/> */}
        {/* <Counter/>
        <Toggle/>
        <TextInput/> */}
        {/* <DataFetcher/> */}
        <UserFetcher/>
      </div>
    </>
  );
}

export default App
