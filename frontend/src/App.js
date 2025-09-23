import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PresentationApp from "./components/PresentationApp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PresentationApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;