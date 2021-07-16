import React, { useState, useEffect } from 'react'
import Checkbox from './Checkbox'
import TextInput from './TextInput'
import { Country, State, City } from 'country-state-city'
import validator from 'validator'
import Map from './Map'
import Radio from './Radio'
import Aos from 'aos'
import "aos/dist/aos.css"
import { useForm, ReuseForm } from './useForm'
import SelectDropdown from './SelectDropdown'
import Popup from './popup'
import axios from 'axios'

const initialValues = {
  fullName: '',
  // type: '',
  location: '',
  state: '',
  district: '',
  number: '',
  message: '',
  tAndC: false
}

const Form = () => {
const [showpop, isshowpop] = useState(false)
  const [formError, setFormError] = useState({})

  const [states, setStates] = useState([])
  useEffect(() => {
    let states = State.getStatesOfCountry("IN")
    setStates(states)
  }, [])

  const [selectedState, setSelectedState] = useState()
  const [districts, setDistricts] = useState([])
  const setSelected = (e) => {
    console.log(e.target.selectedIndex, 'selected state')
    const index = e.target.selectedIndex;
    const optionElement = e.target.childNodes[index]
    console.log(optionElement, 'optionElement')
    const option = optionElement.getAttribute("code")
    console.log(option, "option")
    setSelectedState(option) 
  }
  useEffect(() => {
    const districtList = City.getCitiesOfState("IN", `${selectedState}`)
    setDistricts(districtList)
    console.log(City.getCitiesOfState("IN", `${selectedState}`), 'districts')
  }, [selectedState])

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  const validations = () => {
    let temp = {}
    temp.fullName = values.fullName ? "" : "This field is required"
    temp.type = values.type ? "" : "This field is required"
    temp.location = values.location ? "" : "This field is required"
    temp.state = values.state ? "" : "This field is required"
    validator.isEmpty(`${values.email}`) ? temp.email = "This field is required" : temp.email = ""
    validator.isEmail(`${values.email}`) ? temp.email = "" : temp.email = "Invalid E-Mail format"
    temp.number = values.number ? "" : "This field is required"
    temp.number = values.number.length > 9 ? "" : "Minimum 10 digits required"
    setFormError({
      ...temp
    })

    return Object.values(temp).every(x => x === "")
  }

  const {values, setValues, handleChange} = useForm(initialValues)
// const formrest= () =>{

//     values.fullName= '',
//     values.type='',
//     values.location= '',
//     values.state= '',
//     values.district= '',
//     values.number= '',
//     values.message= ''
//   console.log("value")
// }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(validations()) {
    const data = {
      name: values.fullName,
      looking_for: values.type,
      location: values.location,
      state: values.state,
      district: values.district,
      email:  values.email,
      mobile: values.number,
      message: values.message
    };
    axios
      .post("https://3k06rt8n4h.execute-api.ap-south-1.amazonaws.com/local/api/admin/sendContactForm", data)
      .then(res => {
        if(res.status == 200)
        {
         
          isshowpop(true);
        }
      })
      .catch(err => console.log(err));
      // alert("we will getback to you shortly")
    }
  }
  const hadelformmodal =() =>
  {
    values.fullName= '' 
    // values.type=''
    values.location= ''
    values.state= ''
    values.email=''
    values.district= ''
    values.number= ''
    values.message= ''
    isshowpop(false);
  }
  return (
    <div className='row justify-content-end contact-form-container'>
      <div  
        data-aos="fade-right" 
        data-aos-once="false" 
        className="col-sm-6 mb-8 contact-form"
      >
        {/* <h2 className="text-dark" >  Learn Anytime, Anywhere </h2> */}
        <h2 className="text-dark" style={{fontSize: "36px", textAlign: "center"}} >  Get in touch! </h2>
         
        <ReuseForm onSubmit={handleSubmit}>

          <div className="card contact-us-card-form">
            <div className="card-content  shadow p-15">
              <div className="my-7">
                <TextInput
                  type='text'
                  placeholder='Full Name'
                  name='fullName'
                  value={values.fullName}
                  onChange={handleChange}
                />
                {formError.fullName && <span className="text-danger"> {formError.fullName} </span>}
              </div>

              <div className="my-7" id="sml-chjfo">
                <p className="mb-1">Looking For</p>

                <Radio
                  value='School Solutions'
                  name='type'
                  label='School Solutions'
                  onChange={handleChange}
                />
                <Radio
                  className="spsast"
                  name='type'
                  value="Student Pack"
                  label="Student Pack"
                  onChange={handleChange}
                />

                {formError.type && <span className="text-danger"> {formError.type} </span>}
              </div>

              <div className="my-7">
                <TextInput
                  type='text'
                  placeholder='Location'
                  name='location'
                  value={values.location}
                  onChange={handleChange}
                />
                {formError.location && <div className="text-danger"> {formError.location} </div>}
              </div>

              <div className="my-7">
                <SelectDropdown
                  placeholder='State'
                  name='state'
                  value={values.state}
                  onChange={(e) => {
                    handleChange(e)
                    setSelected(e)
                  }}
                >
                  <option value=""> State </option>
                  {
                    states.length ? states.map(state => (
                      <option
                        key={`${state.latitude}${state.longitude}`}
                        value={state.name}
                        code={state.isoCode}
                      >
                        {state.name}
                      </option>
                    )) : ""
                  }
                </SelectDropdown>
                {formError.state && <span className="text-danger"> {formError.state} </span>}
              </div>

              <div className="my-7">
                <SelectDropdown
                  placeholder='District'
                  name='district'
                  value={values.district}
                  onChange={(e) => {
                    handleChange(e)
                    console.log(values, "values object")
                  }}
                >
                  <option value=""> Select District </option>
                  {
                    districts.length ? districts.map(district => (
                      <option
                        key={`${district.latitude}${district.longitude}`}
                        value={district.name}
                      >
                        {district.name}
                      </option>
                    )) : ""
                  }
                </SelectDropdown>
              </div>

              <div className="my-7">
                <TextInput
                  type='text'
                  placeholder='E-Mail'
                  name='email'
                  value={values.email}
                  onChange={handleChange}
                />

                {formError.email && <span className="text-danger"> {formError.email} </span>}
              </div>

              <div className="my-7">
                <TextInput
                  type='number'
                  placeholder='Mobile'
                  name='number'
                  value={values.number}
                  onChange={handleChange}
                />
                {formError.number && <span className="text-danger"> {formError.number} </span>}
              </div>

              <textarea
                className="form-control mb-5 text-area"
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
              />
              <Checkbox
                label={' I agree to receive newsletters & other communications from RankPedia '}
                name='tAndC'
                value={values.tAndC}
                onChange={handleChange}
              />
              <a href="/privacy-policy" className="link my-5" style={{ display: 'block' }}>
                Privacy Policy
              </a>
              <a href="#">
                <button className="btn btn btn-blue-3 header-btn1 head-login" disabled={!values.tAndC}>
                  Submit
                </button>
              </a>
            </div>
          </div>

          
        </ReuseForm>
      </div>
      <div 
        data-aos="fade-left" 
        data-aos-once="false" 
        className="col-sm-6 py-15 d-flex justify-content-center align-items-center" id="map" 
      >
        <Map />
      </div>
      {showpop?
      <div className="container-full">
      <div className="popupSuccess">
      <div className="popup_innerSuccess text-center p-5">
        <img
          src="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1626443217/done_icon_hfsyl7.svg"
          alt="rightLogo"
          className="popupSuccessIcon"
        />
        <div className="popupSuccessTitle pt-3 pb-2">Successful</div>
        <div className="popupSuccessContent pb-4">
          Thank You For Choosing Rankpedia
        </div>{" "}
        <div className="text-center mb-3">
          {" "}
          <button
            className="btn pt-3 pb-3 pl-5 pr-5 PopupSuccessBtn"  onClick={hadelformmodal} 
          >
            Done
          </button>
        </div>
      </div>
    </div>
    </div>
:null}
    </div>
  )
}

export default Form
