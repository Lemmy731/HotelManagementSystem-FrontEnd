import React from 'react'
import "./Button.css"

const Button = ({text}) => {
  return (
    <button type="button" className='btn btn-center'>{text}</button>
  )
}

export default Button