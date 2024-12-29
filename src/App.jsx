import { useState } from 'react'

import './App.css'
import ChatRequest from './components/ChatRequest';
import ChatResponse from './components/ChatResponse';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className="App">
        <header className="bg-primary text-center text-capitalize text-white">
          <h1>gemini ai chat bot</h1>
        </header>
        <div>
          <ChatRequest />
          <ChatResponse />
        </div>
      </div>
    
  );
}

export default App
