import React from 'react'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
// import image1 from '../../assets/image/gradelanding/double-right-arrows.png'
// import image2 from '../../assets/image/gradelanding/rankpedia_logo.png'

const Section3 = ({ className, ...rest }) => {


  return (
    <div className="row ">
       <Card2 /> 

      <Card3 />

      <Card4 />
      {/* 
      <Card2
        cardImage={image1}
        title="Present"
        firstPoint="Virtual Classrooms"
        secondPoint="Traditional Methods"
      />
      <Card2 
        cardImage={image2}
        firstPoint="Self Paced"
        secondPoint="Experiential Learning"
        title="Future"
      /> */}
    </div>
  );
};

export default Section3
