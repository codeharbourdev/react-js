import React from 'react'
import './Home.css'



export default function Home(props) {
  return (
    <div className='container'>
        <p id='user-title'>{props.name}</p>
        <img id='user-img' src={props.image} alt="image" />
        <p id='user-desc'>{props.desc}</p>    
    </div>
  )
}








