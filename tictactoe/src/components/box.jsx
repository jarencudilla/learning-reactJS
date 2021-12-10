import React from 'react'

const style = {
  border: "2px solid black",
  fontSize: "50 px",
}

export const Box = (props) => <button  name={props.name}  style={style}  onClick={props.onClick}> {props.value}  </button>

export default Box