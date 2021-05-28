import { useState, Fragment, useEffect } from "react";
import './App.css';
import { fetchingFunction } from "./modules/fetching-function";

function App() {
  const [skills, setSkills] = useState();
  
  useEffect(() => {
    fetchingFunction("title", "python", 50)
  }, [])

  useEffect(() => {
    fetchingFunction("skills", "metal", 50)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

//URL { href: "https://emsiservices.com/emsi-open-proxy-service/postings/us/title?q=python&limit=50"

