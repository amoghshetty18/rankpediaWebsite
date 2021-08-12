import React, {useState} from "react";
import { Modal, Button } from 'antd'
import QuizWizzPopUp from "../Header/QuizWizzPopUp";
import { backgroundColor } from "styled-system";

const JobCard2 = ({ options, handleUserAttempts, userAttempts }) => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isQuizModalVisible, setIsQuizModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  const showQuizModal = () => {
    setIsQuizModalVisible(true)
  }

  const handleQuizOk = () => {
    setIsQuizModalVisible(false);
  }

  const handleQuizCancel = () => {
    setIsQuizModalVisible(false);
  }

  const handleModal = () => {
    if(userAttempts === 0) {
      showModal()
    } else {
      showQuizModal()
    }
  }

  return (
    <div>
      {/* <a href={options.quizlink}> */}
      <a href='#' onClick={handleModal}>
      <div className="d-flex bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
      {/* <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1"> */}
        <div className="mr-6">
          <img className="square-116" style={{background: options.bgcolor}} src={options.image} alt="" />
        </div>
        <div className="mt-8 mt-xs-0">
          <h5 className="quiztitlestyling mb-5">
            {options.quizname}
          </h5>
          {/* <div className="d-flex align-items-center flex-wrap">
            <span className="text-bali-gray font-size-3 pr-9">
              <i className="fa fa-clock mr-2"></i>{options.quiztime}
            </span>
          </div> */}
        </div>
      </div>
      {/* </div> */}
      {/* <div className="d-flex justify-content-between align-items-center flex-wrap">
        <div className="d-flex align-items-center mb-5 mr-5">
          <i className="icon icon-pin-3 mr-2 text-bali-gray position-relative" />
          <span className="text-bali-gray font-size-5">{options.location}</span>
        </div>
        <span
          className={`badge bg-${options.badgeColor}-op1 d-inline-block text-${options.badgeColor} py-4 px-2 min-w-76 d-block line-height-reset mb-5 rounded-5 font-size-3 font-weight-normal`}
        >
          {options.badgeText}
        </span>
      </div>
      <h5 className="pt-6 text-dark-cloud font-size-7 font-weight-medium line-height-reset mb-5">
        {options.title}
      </h5> */}
      </a>
      <Modal visible={isQuizModalVisible} onOk={handleQuizOk} onCancel={handleQuizCancel} footer={null} width='1000px'>
        <div>
          <iframe src={options.quizlink} height='600px' width='100%' frameBorder="0"></iframe>
        </div>
      </Modal>
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        <img src={"https://res.cloudinary.com/ddo1ag5nz/image/upload/v1621923817/crown1_bsnzg3.png"} className="quizwizz-img" />
        <QuizWizzPopUp options={options} handleCancelForm={handleCancel} handleUserAttempts={handleUserAttempts} />
      </Modal>
    </div>
    
  );
};

export default JobCard2;
