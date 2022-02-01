import React from "react";
import ImagePara from "../../components/ImageLeft";

function StandOut() {
    return(
        <div className="new-bg">
            <ImagePara
            imgPos={"right"}
            title={"How do we stand out?"}
            paragraph={"The courses will be delivered by a variety of national and international universities that are the best in the particular field of study."}
            imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643624953/continuing-education/How-do-we-stand-out_kr0ley.png"
            >
                <ul>
                    <li>
                    Industry specialists from the fields of performing arts, health care, agriculture, medicine, engineering, management, education, etc curate our courses.
                    </li>
                    <li>
                    The courses will be delivered by a variety of national and international universities that are the best in the particular field of study. 
                    </li>
                    <li>
                    Our courses are devised for the intellectual and personal development of individuals. 
                    </li>
                    <li>
                    Rankpedia also aims at providing the scope for entrepreneurship, apprenticeships, and internships with its collaborations with different industries.  
                    </li>
                    <li>
                    Our Incubation centers encourage learners who wish to start their own startups and if required, we also support them by acting as venture capitalists.
                    </li>
                </ul>
            </ImagePara>
        </div>
    )
}

export default StandOut;