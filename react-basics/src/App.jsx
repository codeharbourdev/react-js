import Usercard from "./components/usercard"
import './App.css'
import logo1 from "./assets/logo 1.png"
import logo2 from "./assets/logo 2.png"

function App() {
  return (
    <div className="maincont">
      <h1>👨‍💻 First React Projects</h1>


      <div className="container">      
        <Usercard name = "Rishabh Kumar Yadav" image = {logo1} desc = "Hi, I am Rishabh" style = {{"border-radius":"5px"}}/>
        <Usercard name = "Code harbour" image = {logo2} desc = "Hi, I am Code Harbour" style = {{"border-radius":"5px"}}/>
      </div>
    </div>
  );
}

export default App;

