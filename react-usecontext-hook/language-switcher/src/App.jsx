import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA'

//// step 1 : Create a Context 
//// step 2 : Context Provider 
//// step 3 : Value Pass 
//// step 4 : Context Consumer 

const LanguageSwitcher = createContext();
const ThemeSwitcher = createContext();

function App() {
  const [language, setLanguage] = useState('en'); 
  const [theme, setTheme] = useState('light');

  return (
    <ThemeSwitcher.Provider value={{theme, setTheme}}>
      <LanguageSwitcher.Provider value={{language, setLanguage}}>
        <div id="parent" style={{backgroundColor:theme === 'light' ? '#191927' : 'black'}}>
          <ChildA/>
        </div>
      </LanguageSwitcher.Provider> 
    </ThemeSwitcher.Provider>
  )
}

export default App
export {LanguageSwitcher} 
export {ThemeSwitcher}