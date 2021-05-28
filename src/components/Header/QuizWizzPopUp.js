import React from 'react'
import InputField from './InputField'

const QuizWizzPopUp = (props) => {

  const {togglePopUp, setTogglePopUp} = props 

  const handleToggle = (e) => {
    e.preventDefault()
    setTogglePopUp(false)
  }

  return (
    <div className="quizwizz-form p-7">
      {/* <div className="mb-3">
        <label for="formFile" className="form-label">Default file input example</label>
        <input className="form-control" type="file" id="formFile" />
      </div>
      <div className="mb-3">
        <label for="formFileMultiple" className="form-label">Multiple files input example</label>
        <input className="form-control" type="file" id="formFileMultiple" multiple />
      </div>
      <div className="mb-3">
        <label for="formFileDisabled" className="form-label">Disabled file input example</label>
        <input className="form-control" type="file" id="formFileDisabled" disabled />
      </div>
      <div className="mb-3">
        <label for="formFileSm" className="form-label">Small file input example</label>
        <input className="form-control form-control-sm" id="formFileSm" type="file" />
      </div>
      <div>
        <label for="formFileLg" className="form-label">Large file input example</label>
        <input className="form-control form-control-lg" id="formFileLg" type="file" />
      </div> */}
      <h4 className="quizwizz-popup-heading fnt-fmly"> QuizWizz </h4>
      <p className="quizwizz-popup-text fnt-fmly"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ex voluptates ea facere, velit reiciendis. </p>
      
      <hr className="my-8" />
  
      <InputField 
        labelName="Student Name"
        type="text"
        placeholder="ex. John Doe"
      />
      <InputField
        labelName="School Name"
        type="text"
        placeholder="ex. Hogwarts"
      />
      <label className="mb-3 fnt-fmly"> Select Grade </label>
      <select className="custom-select mb-5 fnt-fmly">
        <option selected > Select Grade </option>
        <option className="grade-options fnt-fmly">Grade 8</option>
        <option className="grade-options fnt-fmly">Grade 9</option>
        <option className="grade-options fnt-fmly">Grade 10</option>
      </select>
      <InputField
        labelName="Parent's Number"
        type="number"
        placeholder="+91"
      />
      <a href="#">
        <button 
          className="btn btn btn-blue-3 header-btn1 head-login fnt-fmly"
          onClick={handleToggle}>
          Submit     <i className="fas fa-arrow-right ml-5"></i>
        </button>
      </a>
    </div>
    
  )
}

export default QuizWizzPopUp
