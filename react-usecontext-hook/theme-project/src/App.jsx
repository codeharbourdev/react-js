import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

////  step1 : create a context 
////  step2 : context provider 
////  step3 : value pass 
////  step4 : context consumer 

const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id='container' style={{backgroundColor:theme === 'dark' ? "#0f111a" : "blueviolet", color:theme === 'dark' ? "blueviolet" : "#0f111a"}}>
        <ChildA/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
export {ThemeContext}
