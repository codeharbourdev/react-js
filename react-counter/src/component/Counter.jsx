import { useState } from 'react'
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0); 

  return (
    <div className='count-container'>
      <p id='count-text'>Count is {count}</p>
      <button id='btn' onClick={()=> {setCount(count+1)}}>Click</button>
    </div>
  )
}














