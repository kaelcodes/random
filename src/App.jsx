import React, { useState } from "react";
import Board from "./Board";

export default function App() {
  const [boardName] = useState("Anonymous Board");

  return (
    <div className="app">
      <header className="topbar">
        <h1>{boardName}</h1>
        <p className="hint">Double-click anywhere on the board to add a sticky note.</p>
      </header>
      <Board />
      <footer className="footer">
        <small>Anonymous, local-only board. Notes are saved in your browser.</small>
      </footer>
    </div>
  );
}