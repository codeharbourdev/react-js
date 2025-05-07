import React from 'react'
import "./Usercrad.css"

const Usercard = (props) => {
  return (
    <div className='usercontainer' style={props.style}>
        <p id='usertitle'>{props.name}</p>
        <img id='userimg' src={props.image} alt="image"></img>
        <p id='userdisc'>{props.desc}</p>
    </div>
  )
}

export default Usercard
