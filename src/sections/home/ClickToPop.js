import React, { useState } from 'react';
import Form from './Form';
import PopUp from './PopUp';
 
function ClickToPop() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
    <input
      type="button"
      value="Connect Us"
      style={{
          backgroundColor: 'blue',
          color: 'white'
      }}
      onClick={togglePopup}
    />
    {isOpen && <PopUp
      content={<>
        <Form/>
        {/* <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
export default ClickToPop;
 