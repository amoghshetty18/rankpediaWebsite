import React from 'react'

const TextInput = (props) => {

  const { type, placeholder, name, onChange, value, ...others} = props

  return (
    <input
      type={type}
      className='form-control input'
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      value={value}
      {...others}
    />
  )
}

export default TextInput
