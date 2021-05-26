import React from 'react'
import Checkbox from './Checkbox'
import TextInput from './TextInput'
import Map from './Map'

const Form = () => {

  return (
    <div className='row my-5 justify-content-end mt-22 contact-form-container'>
      <div className="col-sm-6 mb-8 contact-form">
        <h2 className="text-dark" >  Contact Us </h2>
        <p className="text-muted">
          1143, 2nd floor, 6th Main Road, 7th Sector, HSR Layout, Bengaluru, Karnataka 560102
        </p>
        <TextInput type='text' placeholder='Full Name' />
        <p className="mt-3 mb-1">Looking For</p>
        <Checkbox value={'School Solutions'} />
        <Checkbox value={'Teacher App'} />
        <Checkbox value={'Student Pack'} />
        <TextInput type='text' placeholder='Location' />
        <TextInput type='email' placeholder='E-Mail' />
        <TextInput type='number' placeholder='Mobile' />
        <textarea className="form-control mb-5 text-area" placeholder="Message" />
        <Checkbox value={' I agree to receive newsletters & other communications from RankPedia '} />
        <a href="#" className="link my-5" style={{ display: 'block' }}>
          Privacy Policy
        </a>
        <a href="#">
          <button className="btn btn btn-blue-3 header-btn1 head-login">
            Submit Form
          </button>
        </a>
        
      </div>
      <div className="col-sm-6 py-15" id="map" >
        <Map />
      </div>
    </div>
  )
}

export default Form
