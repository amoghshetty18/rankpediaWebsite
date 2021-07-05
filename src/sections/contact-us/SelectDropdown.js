import React from 'react'

const SelectDropdown = (props) => {

  const { name, placeholder, value,
  onChange, ...other } = props

  return (
    // <select 
    //   class="form-select" aria-label="Default select example"
    //   placeholder={placeholder}
    //   name={name}
    //   onChange={onChange}
    //   value={value}  
    // >
    //   {props.children}
    // </select>

  <select 
    class="form-control" 
    id="exampleFormControlSelect1"
    placeholder={placeholder}
    name={name}
    onChange={onChange}
    value={value}  
  >
    {props.children}
  </select>
  )
}

export default SelectDropdown
