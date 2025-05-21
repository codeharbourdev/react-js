
import { useState } from 'react'
import './App.css'
import Ques from './components/Ques'

function App() {

  const [activeIndex, setActiveIndex] = useState(null)

  function handleClick(index) {
    setActiveIndex((activeIndex) => {
      if(activeIndex === index) {
        return null;
      } else {
        return index;
      }
    })
  }
  
  return (
    <div className='main-div'>
      <h1>Additional FAQ's</h1>
      <div className='section'>
      <Ques 
      ques="1. Which animal is known as the 'Ship of the Desert?" 
      ans="Ans. Camel" 
      isActive = {activeIndex === 0} 
      onShow = {() => {handleClick(0)}}
      />
      <Ques 
      ques="2. Rainbow consist of how many colours?" 
      ans="Ans. 7 colours" 
      isActive = {activeIndex === 1} 
      onShow = {() => {handleClick(1)}}
      />
      <Ques 
      ques="3. How many consonants are there in the English alphabet?" 
      ans="Ans. 21 Consonants" 
      isActive = {activeIndex === 2} 
      onShow = {() => {handleClick(2)}}
      />
      <Ques 
      ques="4. What is the National song of India?" 
      ans="Ans. Vande Mataram" 
      isActive = {activeIndex === 3} 
      onShow = {() => {handleClick(3)}}
      />
      <Ques 
      ques="5. Who designed the National Flag of India?" 
      ans="Ans. Pingali Venkayya" 
      isActive = {activeIndex === 4} 
      onShow = {() => {handleClick(4)}}
      />
      <Ques 
      ques="6. How many continents are there in the world?" 
      ans="Ans. 7 continents" 
      isActive = {activeIndex === 5} 
      onShow = {() => {handleClick(5)}}
      />
      <Ques 
      ques="7. Which is the smallest month of the year?" 
      ans="Ans. February" 
      isActive = {activeIndex === 6} 
      onShow = {() => {handleClick(6)}}
      />
      <Ques 
      ques="8. Name the largest planet of our Solar System?" 
      ans="Ans. Jupiter" 
      isActive = {activeIndex === 7} 
      onShow = {() => {handleClick(7)}}
      />
      </div>
    </div>
  )
}

export default App


