import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PresentationApp from "./components/PresentationApp";

function App() {
  return (
    <div className="App">
      {/* process.env.PUBLIC_URL contendrá '/edbpresentacion' gracias al campo "homepage" */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<PresentationApp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
