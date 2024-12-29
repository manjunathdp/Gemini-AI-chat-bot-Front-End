import React from "react";
import { marked } from "marked"; // Install marked using `npm install marked`

export default function ChatResponse({ response }) {
  if (!response) {
    return null;
  }
  const { candidates, usageMetadata, modelVersion } = response;
  return (
    <div className="container my-4">
      <h3>Response</h3>
      {candidates.map((candidate, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h5 className="card-title">Candidate {index + 1}</h5>
            {/* Render content using Markdown */}
            <div
              className="card-text"
              dangerouslySetInnerHTML={{
                __html: marked(candidate.content.parts[0].text),
              }}
            />
            <h6>Citations:</h6>
            <ul>
              {candidate?.citationMetadata?.citationSources.map(
                (source, idx) => (
                  <li key={idx}>
                    <a
                      href={source.uri}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.uri}
                    </a>{" "}
                    (Indexes: {source.startIndex}-{source.endIndex})
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      ))}
      <h4>Usage Metadata</h4>
      <p>Prompt Tokens: {usageMetadata.promptTokenCount}</p>
      <p>Prompt Response Tokens: {usageMetadata.candidatesTokenCount}</p>
      <p>Total Tokens: {usageMetadata.totalTokenCount}</p>

      <p>
        <strong>Model Version: </strong> {modelVersion}
      </p>
    </div>
  );
}
