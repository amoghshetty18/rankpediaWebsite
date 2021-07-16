import React from 'react'

const Radio = (props) => {

  const { value, label, onChange, name } = props

  return (
    <div className="form-check-inline mt-3">
      <input
        className="form-check-input" 
        type="radio" 
        value={value}
        onChange={onChange}
        name={name} 
        id="flexRadioDefault1" 
      />
      <label className="form-check-label" for="flexRadioDefault1">
        {label}
      </label>
    </div>
  )
}

export default Radio
