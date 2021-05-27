import React from 'react'

const InputField = (props) => {

  const { type, placeholder, labelName } = props

  return (
    <div className="form-group popup-input-group mb-5 fnt-fmly">
      <label className="mb-3">{labelName}</label>
      <input type={type} className="form-control" placeholder={placeholder} />
     </div>
  )
}

export default InputField