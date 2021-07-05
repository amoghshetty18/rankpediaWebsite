import React from 'react'

const TextInput = (props) => {

  const { type, placeholder, name, onChange, value } = props

  return (
    <input
      type={type}
      className='form-control input'
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
    />
  )
}

export default TextInput
