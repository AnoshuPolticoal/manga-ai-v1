import { useState } from "react"
import "./App.css"

function App() {
  const [prompt, setPrompt] = useState("")
  const [panels, setPanels] = useState([])

  const generateManga = () => {
    setPanels([
      { id: 1, text: "A boy walks in the forest.", img: null },
      { id: 2, text: "He discovers a glowing dragon egg!", img: null }
    ])
  }

  return (
    <div className="app">
      <h1>Manga Generator</h1>

      {/* Prompt Input */}
      <div className="controls">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your manga idea..."
        />
        <button onClick={generateManga}>Generate</button>
      </div>

      {/* Panels */}
      <div className="panels">
        {panels.map((p) => (
          <div key={p.id} className="panel">
            <div className="panel-image">
              {p.img ? <img src={p.img} alt="panel" /> : <span>No Image</span>}
            </div>
            <p className="panel-text">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
