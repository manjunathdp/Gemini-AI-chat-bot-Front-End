import { useState } from "react";

import "./App.css";
import ChatRequest from "./components/ChatRequest";
import ChatResponse from "./components/ChatResponse";
import { fetchChatResponse } from "./services/api";

function App() {
  const [count, setCount] = useState(0); // Initialize request count
  const [response, setResponse] = useState(null); // Initialize chat response
  const [loading, setLoading] = useState(false); // Initialize loading state

  // Function to handle question submission
  const handleQuestionSubmit = async (question) => {
    setLoading(true); // Show loading state
    setResponse(null); // Reset response state

    try {
      const apiResponse = await fetchChatResponse(question); // Fetch chat response
      setResponse(apiResponse); // Update response state
    } catch (error) {
      alert("Failed to get response"); // Error handling
    } finally {
      setLoading(false); // Hide loading state
      setCount((prevCount) => prevCount + 1); // Increment request count
    }
  };

  return (
    <div className="App">
      <header className="bg-primary text-center text-capitalize text-white">
        <h1>Gemini AI Chat Bot</h1>
      </header>
      <div>
        <ChatRequest onSubmit={handleQuestionSubmit} />
        {loading && <p>Loading...</p>} {/* Show loading message if loading */}
        <ChatResponse response={response} />
        <div>
          <h6>Request Count: {count}</h6> {/* Display request count */}
        </div>
      </div>
    </div>
  );
}

export default App;
