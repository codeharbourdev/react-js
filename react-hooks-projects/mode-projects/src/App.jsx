import { useState } from 'react'
import './App.css'

function App() {

  const [isTheme, setIsTheme] = useState("black");

  const handleClick = () => {
    if (isTheme === "black") {
      setIsTheme("white");
    } else {
      setIsTheme("black");
    }
  }

  return (
    <div className='parent' style={{backgroundColor : isTheme}}>
      <button onClick={handleClick}>
        {isTheme === "black" ? "🌙 Dark Mode" : "🌞 Light Mode"}
        </button>
    </div>
  )
}

export default App
