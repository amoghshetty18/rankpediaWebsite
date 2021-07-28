import React, {useState} from 'react'
import InputField from './InputField'
import axios from 'axios'

const QuizWizzPopUp = (props) => {

  const {handleCancel} = props 

  const [studentName, setStudentName] = useState("")
  const [schoolName, setSchoolName] = useState("")
  const [grade, setGrade] = useState('')
  const [parentsNumber, setParentsNumber] = useState('')
  const [formError, setFormError] = useState({})

  const handleChange = (e) => {
    if(e.target.name === 'studentName') {
      setStudentName(e.target.value)
    } else if (e.target.name === 'schoolName') {
      setSchoolName(e.target.value)
    } else if (e.target.name === 'grade') {
      setGrade(e.target.value)
    } else if (e.target.name === 'parentsNumber') {
      setParentsNumber(e.target.value)
    }
  }

  const validations = () => {
    let temp = {}
    temp.studentName = studentName ? "" : "This field is required"
    temp.schoolName = schoolName ? "" : "This field is required"
    temp.grade = grade ? "" : "This field is required"
    if(parentsNumber === '') {
      temp.parentsNumber = "This field is required"
    } else if (parentsNumber.length < 10) {
      temp.parentsNumber = parentsNumber.length < 10 ? "10 digits required" : ""
    } else if (parentsNumber.length > 10) {
      temp.parentsNumber = parentsNumber.length > 10 ? "Only 10 digits allowed" : ""
    }

    setFormError({
      ...temp
    })
    return Object.values(temp).every(x => x === "")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(validations()) {
      const data = {
        name: studentName,
        school_name: schoolName,
        grade: grade,
        phone: parentsNumber
      };
      axios
        .post("https://3k06rt8n4h.execute-api.ap-south-1.amazonaws.com/local/api/admin/sendquizwiz", data)
        .then(res => {
          if(res.status === 200 )
          {
            if(grade === "Grade 8"){
            window.location='/quizlisting8/'}
            else if(grade === "Grade 9")
            {
              window.location='/contact/'
            }
            else
            {
              window.location="/about/"
            }
            // isshowpop(true);
          }
        })
        .catch(err => console.log(err));
        // alert("we will getback to you shortly")
      }
  }

  return (
    <div className="quizwizz-form p-7">
      <h4 className="quizwizz-popup-heading fnt-fmly"> QuizWizz </h4>
      <p className="quizwizz-popup-text fnt-fmly"> Want to enjoy the talent quiz? </p>
      <p className="quizwizz-popup-text fnt-fmly"> No more serious games when you can enjoy game learning with Test Quiz.  </p>
      <p className="quizwizz-popup-text fnt-fmly"> Enter your details below to start the quiz and hit the Submit button. </p>
      
      <hr className="my-5"/>

      <div className="mb-5">
        <InputField
          labelName="Student Name"
          type="text"
          placeholder="ex. John Doe"
          name='studentName'
          value={studentName}
          onChange={handleChange}
        />
        {formError.studentName && <span className="text-danger"> {formError.studentName} </span>}
      </div>

      <div className="mb-5">
        <InputField
          labelName="School Name"
          type="text"
          placeholder="ex. Hogwarts"
          name='schoolName'
          value={schoolName}
          onChange={handleChange}
        />
        {formError.schoolName && <span className="text-danger"> {formError.schoolName} </span>}
      </div>

      <div className="mb-5">
        <label className="mb-3 fnt-fmly"> Select Grade </label>
        <select
          className="custom-select fnt-fmly"
          name='grade'
          value={grade}
          onChange={handleChange}
        >
          <option selected > Select Grade </option>
          <option className="grade-options fnt-fmly">Grade 8</option>
          <option className="grade-options fnt-fmly">Grade 9</option>
          <option className="grade-options fnt-fmly">Grade 10</option>
        </select>
        {formError.grade && <span className="text-danger"> {formError.grade} </span>}
      </div>
  
      <div className="mb-5">
        <InputField
          labelName="Parent's Number"
          type="number"
          placeholder="+91"
          name='parentsNumber'
          value={parentsNumber}
          onChange={handleChange}
        />
        {formError.parentsNumber && <span className="text-danger"> {formError.parentsNumber} </span>}
      </div>
      
      <a href="#">
        <button 
          className="btn btn btn-blue-3 header-btn1 head-login fnt-fmly"
          onClick={handleSubmit}
        >
          Submit     <i className="fas fa-arrow-right ml-5"></i>
        </button>
      </a>
    </div>
    
  )
}

export default QuizWizzPopUp
