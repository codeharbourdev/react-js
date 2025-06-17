import React, { useContext } from 'react'
import './ChildC.css'
import {ThemeContext} from '../App'

const ChildC = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    function toggletheme() {
        if(theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
  return (
    <div id='child-container'>
        <button onClick={toggletheme}>Change Color</button>
        <p>Color : {theme}</p>
    </div>
  )
}

export default ChildC
