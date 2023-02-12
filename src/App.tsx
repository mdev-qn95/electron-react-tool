import React from "react";
import couple from "./couple.gif";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={couple} className="couple" alt="couple" />
      </header>
    </div>
  );
}

export default App;
