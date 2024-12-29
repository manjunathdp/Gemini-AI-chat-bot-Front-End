import React, { useState } from "react";

export default function ChatRequest({onSubmit}) {
    const [question,setQuestion] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    if(question.trim()) {
        onSubmit(question);
        setQuestion("");
    }
  };
  return (
    <div className="container my-4">
      <div onSubmit={handelSubmit}>
        <div class="form-group">
          <label htmlFor="question" class="form-label">
            Ask a Question
          </label>
          <input
            type="text"
            name="question"
            id="question"
            className="form-control"
            placeholder="Enter your Question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
            Submit

        </button>
      </div>
    </div>
  );
}
