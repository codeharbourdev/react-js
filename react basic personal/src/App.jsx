import './App.css'
import Home from "./components/Home"
import logo1 from "./assets/logo1.png"
import logo2 from "./assets/logo2.png"
import logo3 from "./assets/logo3.png"
import logo4 from "./assets/logo4.png"
import logo5 from "./assets/logo5.png"
import logo6 from "./assets/logo6.png"
import logo7 from "./assets/logo7.png"
import logo8 from "./assets/logo8.png"
import logo9 from "./assets/logo9.png"
import logo10 from "./assets/logo10.png"

function App() {

  return (
    <div className="parent">
      <h1>UserCard 👨‍💻 First React Project</h1>
    
      <div className="main-container">
      <Home name = "Rishabh Yadav" image = {logo1} desc = "Hi, I'm Rishabh"/>
      <Home name = "Code Harbour" image = {logo2} desc = "Hi, I'm  Harbour" />
      <Home name = "Rare Pixel" image = {logo3} desc = "Hi, I'm  Aura"  />
      <Home name = "Chiyaan Vikram" image = {logo4} desc = "Hi, I'm  Vikram"  />
      <Home name = "Arjit Singh" image = {logo5} desc = "Hi, I'm  Arjit"  />
      <Home name = "Natural Star" image = {logo6} desc = "Hi, I'm  Nani"  />
      <Home name = "Baba Bholenath" image = {logo7} desc = "Hi, I'm  Bhole"  />
      <Home name = "God Mahadev" image = {logo8} desc = "Hi, I'm  Mahadev"  />
      <Home name = "Radha Krishna" image = {logo9} desc = "Hi, I'm  Krishna"  />
      <Home name = "Maa Parvati" image = {logo10} desc = "Hi, I'm  Parvati"  />
      </div>
    </div>
  )
}

export default App




