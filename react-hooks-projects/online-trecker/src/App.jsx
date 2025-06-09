import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const updateState = () => {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener("online", updateState);
    window.addEventListener("offline", updateState);

    return () => {
      window.removeEventListener("online", updateState);
      window.removeEventListener("offline", updateState);
    }
  }, []);

  return (
    <div className='parent'>
      <h1>Online Tracker App</h1>
      <button className={isOnline ? "Online" : "Offline"}>{isOnline ? "You are Online" : "You are Offline"}</button>
    </div>
  )
}

export default App

