import './Ques.css'

import React from 'react'

const Ques = (props) => {
  return (
    <section>
        <h2>{props.ques}</h2>
        {props.isActive && <p>{props.ans}</p>}
        <button onClick={props.onShow}>
            {props.isActive ? "Hide" : "Show"}
        </button>
    </section>
  )
}

export default Ques

