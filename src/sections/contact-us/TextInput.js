import React from 'react'

const TextInput = (props) => {

  const { type, placeholder } = props

  return (
    <input type={type} className='form-control input my-7' placeholder={placeholder} />
  )
}

export default TextInput
