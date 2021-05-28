import React from 'react'

const Checkbox = (props) => {

  const { value } = props

  return (
    <div className="form-check form-check-inline">
      <input className="form-check-input" type="checkbox" value="option1" />
      <label className="form-check-label" for="inlineCheckbox1">{value}</label>
    </div>
  )
}

export default Checkbox
