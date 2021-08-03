import React, {useState} from "react";
import { Modal, Button } from 'antd'

const JobCard2 = ({ options }) => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  return (
    <div>
      {/* <a href={options.quizlink}> */}
      <a href='#' onClick={showModal}>
      <div className="d-flex bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1">
      {/* <div className="bg-white d-xs-flex align-items-center px-9 py-10 mb-9 shadow-2 gr-hover-1"> */}
        <div className="mr-10">
          <img className="square-116" src={options.image} alt="" />
        </div>
        <div className="mt-8 mt-xs-0">
          <h4 className="font-size-8 font-weight-medium text-dark-cloud mb-5 line-height-34">
            {options.quizname}
          </h4>
          <div className="d-flex align-items-center flex-wrap">
            <span className="text-bali-gray font-size-3 pr-9">
              <i className="fa fa-clock mr-2"></i>{options.quiztime}
            </span>
          </div>
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
      <Modal visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={null} width='1000px'>
        <div>
          <iframe src={options.quizlink} height='600px' width='100%' frameBorder="0"></iframe>
        </div>
      </Modal>
    </div>
    
  );
};

export default JobCard2;
