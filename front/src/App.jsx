import React, { useState } from "react";
import ReportProblemScreen from "./views/ReportProblemScreen";
import Home from "./views/Home";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
