import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { OpenAIApi } from 'openai';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  
  }
});

const Home = () => {
  const [userInput, setUserInput] = useState("");
  const onUserChangedText = event => {
    setUserInput(event.target.value);
  };
  
  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    
    console.log("Calling OpenAI...")
    const response = fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({ userInput }),
    });
  
    const data = fetch await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)
  
    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }
  
  const Home = () => {
    const [userInput, setUserInput] = useState("");
    const onUserChangedText = event => {
      setUserInput(event.target.value);
    };
  }
const apiKey = process.env.OPENAI_API_KEY;

  return (
    <div className="root">
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>574WARD Marketing Assistant</h1>
          </div>
          <div className="header-subtitle">
            <h2>Build The Bend</h2>
          </div>
        </div>
        <div className="prompt-container">
          <textarea 
            placeholder="start typing here" 
            className="prompt-box" 
            value={userInput} 
            onChange={onUserChangedText} 
          />
        </div>
        <div className="prompt-buttons">
          <a className="generate-button" onClick={callGenerateEndpoint}>
            <div className="generate">
              <p>Generate</p>
            </div>
          </a>
        </div>
        {apiOutput && (
  <div className="Is this what you were looking for?">
    <div className="output-header-container">
      <div className="output-header">
        <h3>Output</h3>
      </div>
    </div>
    <div className="output-content">
      <p>{apiOutput}</p>
    </div>
  </div>
)}
</div>
    </div>
  );
};
export default Home;



