import React, { useState, useEffect } from 'react'

import validator from 'validator';
import emailjs from 'emailjs-com';
// import '../../css/styles.css';
import "./Form.css";
export default function Form() {
    const iValues = {
        username: '',
        phone: '',
        email: '',
        course: '',
        city: ''
    }

    const [formValues, setFormValues] = useState(iValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const [formMail, setFormMail] = useState({});
    const [course,setCourse] = useState('');
    const [board,setBoard] = useState('');

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormValues({...formValues, [name] : value}) 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setisSubmit(true);
        setFormMail(e.target);
    }
    function sendEmail(input){
        console.log(input)
        emailjs.sendForm("service_urm098h", "template_de7orkh", input, "user_V1VGNUFsKYGQEAyxA2WMs")
        .then(res=>{
            console.log(res)
        }).catch(err=>console.log(err))
        // alert("Hi \n Successfully submitted")
    }

    const validate = (values) => {
        const errors = {}
        // const regEx="^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
        if(!values.username){
            errors.username="Username is required";
        }
        if(!values.phone){
            errors.phone="Mobile number is required";
        }else if(isNaN(values.phone)){
            errors.phone="Please enter a number";
        }
        else if(values.phone.length!==10){
            errors.phone="Please type 10 digit mobile number"
        }
        if(!validator.isEmail(values.email)){
            errors.email='Enter valid Email!'
        }
        if(!course){
            errors.course="Select a course";
        }
        if(!board){
            errors.board="Select a Board";
        }
        return errors;
    }
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmit){
            sendEmail(formMail)
        }
    },[formErrors, formValues,isSubmit,formMail,course, board])

  return (
      <div>
    {/* <div className='container border' */}
        {/* style={{ height:'450px', width:'600px', backgroundPosition: "center" }} */}
        {/* > */}
        {/* <h4
        style={{marginTop:'-10px', textAlign:'center', 
        fontSize:'20px',
        color:'black'}}
        >Your Details</h4> */}
        {/* {console.log(formErrors.email+" length " + Object.keys(formErrors).length + " isSubmit" +isSubmit )} */}
        {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div 
            className='form-control'
            // style={{color:'white', backgroundColor:'#0D6EFD', textAlign:'center',
            // maxHeight:'40px',
            // // margin:'5px 20px 10px 60px',
            // marginBottom: '10px',
            // padding:'0px 10px'}}
            >
                We have received your request Successfully. 
            </div>
            // alert("your request sent successfully")
        ):(
            <span></span>
        )}
        <div>
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
        
        <div className='input-form'>
            {/* <label>Name</label> */}
            <input type="text" name='username' className='form-input-value' value={ formValues.username } 
            onChange={handleChange} placeholder='Name'/>
        </div>
        <p className="para-style">{formErrors.username}</p>
        <div className='input-form'>
            {/* <label>Phone</label> */}
            <input type="text" name='phone' className='form-input-value'
            // className='form-control'
             value={ formValues.phone }
            onChange={handleChange} placeholder='Mobile Number'/>
        </div>
        <p className="para-style">{formErrors.phone}</p>
        <div className='input-form'>
            {/* <label>Email</label> */}
            <input type="email" name='email'
            className='form-input-value' 
            // className='form-control' 
            value={ formValues.email } 
            onChange={handleChange} placeholder='Email'/>
        </div>
        <p className="para-style">{formErrors.email}</p>        
        <div className='input-form-standard'>
        <select className="select-form-value" onChange={(e)=>{setCourse(e.target.value)}}>
            <option name="Class 1" value="class 1" className='select-option-content'>Class 1</option>
            <option name="Class 2" value="class 2" className='select-option-content'>Class 2</option>
            <option name="Class 3" value="class 3" className='select-option-content'>Class 3</option>
            <option name="Class 4" value="class 4" className='select-option-content'>Class 4</option>
            <option name="Class 5" value="class 5" className='select-option-content'>Class 5</option>
            <option name="Class 6" value="class 6" className='select-option-content'>Class 6</option>
            <option name="Class 7" value="class 7" className='select-option-content'>Class 7</option>
            <option name="Class 8" value="class 8" className='select-option-content'>Class 8</option>
            <option name="Class 9" value="class 9" className='select-option-content'>Class 9</option>
            <option name="Class 10" value="class 10" className='select-option-content'>Class 10</option>

        </select>
        </div>
        <p className="para-style">{formErrors.course}</p>
        {/* State  name */}
        <div className='input-form-standard'> 
            <select className="select-form-value" onChange={(e)=>{setBoard(e.target.value)}}>
                <option name="Class 1" value="Karnataka Board" className='select-option-content'>Karnataka Board</option>
                <option name="Class 2" value="Andhra Board" className='select-option-content'>Andhra Board</option>
                <option name="Class 3" value="Maharashtra" className='select-option-content'>Maharashtra Board</option>
                <option name="Class 3" value="CBSE" className='select-option-content'>CBSE</option>
            </select>
            <p className="para-style">{formErrors.board}</p>             
        </div>
        <div className='input-form'>
            <input type='text' name='city' 
            className='form-input-value'
            value={ formValues.city } 
            onChange={handleChange} placeholder='City Name'/> 
        </div>            
        <p></p>
            <button 
            className='btn btn mx-auto gtstrdr'
            style={{
                marginTop:'10px', borderRadius:'5px', maxHeight:'50px',
            size:'30px'}}>Submit</button> 
        </div>          
        
        </form>
        </div>
        
        {/* {formValues.username}
        {formValues.phone}
        {formValues.email}
        {formValues.course} */}
    </div>
  )
}
