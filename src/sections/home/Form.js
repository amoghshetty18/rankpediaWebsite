import React, { useState, useEffect } from 'react'
import validator from 'validator';
import emailjs from 'emailjs-com';
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

    const handleChange = (e) =>{
        const {name, value} = e.target
        setFormValues({...formValues, [name] : value}) 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues))
        setisSubmit(true);
        setFormMail(e.target);
        
        // if(Object.keys(formErrors).length === 0 && isSubmit){
        //     sendEmail(e.target)
        
        // // emailjs.sendForm("service_urm098h", "template_de7orkh", temp, "user_V1VGNUFsKYGQEAyxA2WMs")
        // // .then(res=>{
        // //     console.log(res)
        // // }).catch(err=>console.log(err))
        // // alert("Hi \n Successfully submitted")
        // }
        
    }
    function sendEmail(input){
        // console.log(e)
        // console.log(e.target)
        // e.preventDefault();
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
        // if(!values.email){
        //     errors.email="Email is required";
        // }else if(!regEx.test(values.email)){
        //     errors.email="Please type valid Email"
        // }
        return errors;
    }
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmit){
            sendEmail(formMail)
        }
        // console.log(Object.keys(formErrors))
        // if(Object.keys(formErrors).length === 0 && isSubmit){
        //     sendEmail(formMail)
        // }
    },[formErrors, formValues,isSubmit,formMail])

  return (
      <div>
    {/* <div className='container border' */}
        {/* style={{ height:'450px', width:'600px', backgroundPosition: "center" }} */}
        {/* > */}
        <h4
        style={{marginTop:'-10px', textAlign:'center'}}
        >Your Details:</h4>
        {/* {console.log(formErrors.email+" length " + Object.keys(formErrors).length + " isSubmit" +isSubmit )} */}
        {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className='form-control'
            style={{color:'white', backgroundColor:'#0D6EFD', textAlign:'center'}}>
                Your request sent Successfully. 
            </div>
        ):(
            <span></span>
        )}
        <div>
        <form onSubmit={handleSubmit} className='row' style={{ margin: "25px 25px 10px 100px"}}>
        <div className='container' style={{marginBottom: '10px'}}>
        <div>
            {/* <label>Name</label> */}
            <input type="text" name='username' className='form-control' value={ formValues.username } 
            onChange={handleChange} placeholder='Enter your Name'/>
        </div>
        <p style={{color: 'red'}}>{formErrors.username}</p>
        <div>
            {/* <label>Phone</label> */}
            <input type="text" name='phone' className='form-control' value={ formValues.phone }
            onChange={handleChange} placeholder='00000-00000'/>
        </div>
        <p style={{color: 'red'}}>{formErrors.phone}</p>
        <div>
            {/* <label>Email</label> */}
            <input type="email" name='email' className='form-control' value={ formValues.email } 
            onChange={handleChange} placeholder='abc@gmail.com'/>
        </div>      
        <p style={{color: 'red'}}>{formErrors.email}</p>      
        <div>
            {/* <label>Class : </label> */}
            {/* <select required onChange={handleChange}>
                <option name='course' value=''>Select your class</option>
                <option name='course' value='8'>Class 8</option>
                <option name='course' value='9'>Class 9</option>
                <option name='course' value='10'>Class 10</option>
            </select> */}
            <input type="text" name='course' className='form-control' value={ formValues.course } 
            onChange={handleChange} placeholder=' Enter your Class' />
        </div>
        <p></p>
        <div>
            {/* <label>City : </label> */}
            <input type='text' name='city' className='form-control' value={ formValues.city } 
            onChange={handleChange} placeholder='Bengaluru'/> 
        </div>            
        <p></p>
            <button className='form-control btn btn-primary'
            style={{marginTop:'10px'}}>submit</button> 
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
