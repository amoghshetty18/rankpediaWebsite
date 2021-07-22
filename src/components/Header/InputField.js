import React from 'react'

const InputField = (props) => {

  const { type, placeholder, labelName, ...other } = props

  return (
    <div className="popup-input-group fnt-fmly">
      <label className="mb-3">{labelName}</label>
      <input type={type} className="form-control" placeholder={placeholder} {...other}/>
     </div>
  )
}

export default InputField