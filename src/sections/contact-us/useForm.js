import React, {useState} from 'react'

export const useForm = (initialValues) => {

  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target 
    setValues({
      ...values,
      [name]: value 
    })
  }

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleChange
  }
}


export const ReuseForm = (props) => {

  const {children, ...other} = props 

  return (
    <form {...other}>
      {props.children}
    </form>
  )
}



