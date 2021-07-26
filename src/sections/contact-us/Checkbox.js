import React from 'react'

const Checkbox = (props) => {

  const { value, name, onChange, label } = props

  const convertToDefaultEventPara = (name, value) => ({
    target: {
      name, value
    }
  })

  return (
    <div className="form-check form-check-inline" style={{alignItems: "flex-start"}}>
      <input 
        className="form-check-input contact-us-form-checkbox" 
        type="checkbox" 
        checked={value} 
        onChange={ e => onChange(convertToDefaultEventPara(name, e.target.checked)) }
        name={name} 
      />
      <label className="form-check-label" for="inlineCheckbox1">{label}</label>
    </div>
  )
}

export default Checkbox
