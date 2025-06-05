import { useEffect, useState } from 'react'
import './App.css'

function App() {

  /******************  use state  *********************/
  const [time, setTime] = useState(new Date());

  /*******************  use effect   ********************/
  useEffect(() => {
    let timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  /*****************  date fetch  ***************/
  let hour = time.getHours();
  let displayHour = hour % 12 || 12;

  /*****************  hour setting  ****************/
  function showHour() {
    if(hour >= 12) {
      return "Pm";
    } else {
      return "Am";
    }
  }

  let minute = time.getMinutes();
  let second = time.getSeconds();

  /***************  2nd option only secopnd update  ***************
  const [second, setSecond] = useState(seconds);

  useEffect(() => {
    let timer = setInterval(() => {
      setSecond(prev => (prev + 1) % 60);
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);   **/

  return (
    <div className='parent'>
      <h1>Timer : UseEffect React Hook 👨‍💻</h1>
      <div className='child'>
        <div id='hour'>
          <h1>{displayHour}</h1>
          <h2>hour</h2>
        </div>
        <div id='minute'>
          <h1>{minute}</h1>
          <h2>minute</h2>
        </div>
        <div id='second'>
          <h1>{second}</h1>
          <h2>second</h2>
        </div> 
        <div id='period'>
          <h1>{showHour()}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
