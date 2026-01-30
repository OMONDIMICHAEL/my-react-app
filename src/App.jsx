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
// import UserFetcher from './UserFetcher'
// import TodoList from './TodoList';
// day 7 below
import useLocalStorage from './hooks/useLocalStorage';
import useWindowSize from './hooks/useWindowSize';

function App() {
  // const [count, setCount] = useState(0)
  // day 7 below
  const [name, setName] = useLocalStorage('name', '');
  const size = useWindowSize();

  return (
    <>
      <div>
        {/* <Greeting/> */}
        {/* <h1>useEffect Basics - Data Fetching</h1> */}
        {/* <Gallery/> */}
        {/* <Counter/>
        <Toggle/>
        <TextInput/> */}
        {/* <DataFetcher/> */}
        {/* <h1>useEffect Cleanup & Fetch Real API</h1>
        <UserFetcher/> */}
        {/* <h1>useReducer - Todo List</h1> */}
        {/* <TodoList/> */}
        {/* day 7 below */}
        <h1>Custom Hooks Demo</h1>
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <p>Your name is: {name}</p>
          </div>
          <div>
            <h2>Window Size:</h2>
            <p>
              Width: {size.width}px, Height: {size.height}px
            </p>
          </div>
      </div>
    </>
  );
}

export default App
