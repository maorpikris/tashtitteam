import React, { useState } from 'react'
import ReportProblemScreen from './views/ReportProblemScreen'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ReportProblemScreen />
    </div>
  )
}

export default App
