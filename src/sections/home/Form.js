import React, { useState, useEffect } from 'react'
import validator from 'validator';
import emailjs from 'emailjs-com';
import '../../css/styles.css';
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
        {/* <h4
        style={{marginTop:'-10px', textAlign:'center', 
        fontSize:'20px',
        color:'black'}}
        >Your Details</h4> */}
        {/* {console.log(formErrors.email+" length " + Object.keys(formErrors).length + " isSubmit" +isSubmit )} */}
        {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div 
            className='form-control'
            style={{color:'white', backgroundColor:'#0D6EFD', textAlign:'center',
            maxHeight:'40px',
            // margin:'5px 20px 10px 60px',
            marginBottom: '10px',
            padding:'0px 10px'}}>
                We have received your request Successfully. 
            </div>
            // alert("your request sent successfully")
        ):(
            <span></span>
        )}
        <div>
        <form onSubmit={handleSubmit} className='row' style={{ margin: "0px 25px 10px 20px"}}>
        <div className='container' style={{marginBottom: '10px'}}>
        <div>
            {/* <label>Name</label> */}
            <input type="text" name='username' className='form-input-value' value={ formValues.username } 
            onChange={handleChange} placeholder='Enter your Name'/>
        </div>
        <p style={{color: 'red'}}>{formErrors.username}</p>
        <div>
            {/* <label>Phone</label> */}
            <input type="text" name='phone' className='form-input-value'
            // className='form-control'
             value={ formValues.phone }
            onChange={handleChange} placeholder='Enter 10-digit Mobile number'/>
        </div>
        <p style={{color: 'red'}}>{formErrors.phone}</p>
        <div>
            {/* <label>Email</label> */}
            <input type="email" name='email'
            className='form-input-value' 
            // className='form-control' 
            value={ formValues.email } 
            onChange={handleChange} placeholder='eg: abc@gmail.com'/>
        </div>      
        <p style={{color: 'red'}}>{formErrors.email}</p>      
        <div>
            <input type="text" name='course' 
            className='form-input-value'
            // className='form-control' 
            value={ formValues.course } 
            onChange={handleChange} placeholder=' Enter your Class' />
        </div>
        <p></p>
        <div>
            {/* <label>City : </label> */}
            <input type='text' name='city' 
            className='form-input-value'
            // className='form-control'
            value={ formValues.city } 
            onChange={handleChange} placeholder='Enter City Name'/> 
        </div>            
        <p></p>
            <button 
            // className='form-control btn btn-primary'
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
