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
    class="custom-select" 
   // class="form-control" 
    id="exampleFormControlSelect1"
    placeholder={placeholder}
    name={name}
    onChange={onChange}
    value={value}  
    style={{borderRadius: "0.3125rem", lineHeight: "normal"}}
  >
    {props.children}
  </select>
  )
}

export default SelectDropdown
