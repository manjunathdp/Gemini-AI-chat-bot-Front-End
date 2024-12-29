import { useState } from 'react'

import './App.css'
import ChatRequest from './components/ChatRequest';
import ChatResponse from './components/ChatResponse';

function App() {
  const [count, setCount] = useState(0)
  count [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const handelQuestionSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try{
      //await
    } catch(error) {
      alert("Failed to get response")
    } finally {
      setLoading(false);
    }
  }

  return (
    
      <div className="App">
        <header className="bg-primary text-center text-capitalize text-white">
          <h1>gemini ai chat bot</h1>
        </header>
        <div>
          <ChatRequest onSubmit={handelQuestionSubmit}/>
          <ChatResponse response ={response} />
        </div>
      </div>
    
  );
}

export default App
