import React from 'react';
import ImagePara from "../../components/ImageLeft"

function Purpose() {
    return (
        <div className="new-bg">
            <ImagePara
            imgPos={"right"}
            title={"Why Rankpedia's CE? "}
            paragraph={"Top-Tier International And National Universities, Make People Employable, Employment-Specific Vocational Training,  Introduce Graduates, Postgraduates"}
            imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643625023/continuing-education/Why-Rankpedia_s-CE-program_tsldzq.png"
            >
                <ul>
                    <li>Since theoretical knowledge alone is insufficient to make people employable, we enable the professionals to stay current with the industry's changes and open doors to new employment opportunities in their area or beyond.</li>
                    <li>
                    Rankpedia's collaboration with <b>top-tier international and national universities</b> provides learners with the opportunity to obtain internationally accredited certifications.
                    </li>
                    <li>
                    We focus on <b>employment-specific vocational training</b> delivered through cutting-edge learning technologies tailored to the field in which they wish to work, making the transition to a new career easier.
                    </li>
                    <li>
                    We also aim to <b>introduce graduates, postgraduates</b> to a wide spectrum of knowledge in order to enhance their career opportunities.
                    </li>
                </ul>
            </ImagePara>
            <ImagePara
            title={"Our Unique Selling Points (USPs)"}
            paragraph="Business Incubation center helps future entrepreneurs to build their startups and run smoothly. The courses offered will be cost-effective and can be easily approachable by the students. "
            imgUrl="https://res.cloudinary.com/ddo1ag5nz/image/upload/v1643624987/continuing-education/Our-USP_i1npjc.png"
            >
                <ul>
                    <li>
                    Business Incubation center- help future entrepreneurs to build their startups and run smoothly. 
                    </li>
                    <li>
                    Cost-effective courses- the courses offered will be cost-effective and can be easily approachable by the students. 
                    </li>
                    <li>
                    Association with industry experts- to help our students not only gain skills but also to start their careers as interns or full-time employees in various different companies. 
                    </li>
                    <li>
                    Internships and apprenticeships- for those who wish to start their careers in good companies as per their choice.
                    </li>
                    <li>
                    Scope for entrepreneurship- for those who wish to start their own businesses. 
                    </li>
                    <li>
                    Best International Universities- join the courses of your choice from the best universities across the world. 
                    </li>
                    <li>
                    Employability- Increase the scope of getting a job wherever you wish to by joining the vocational courses.
                    </li>
                </ul>
            </ImagePara>
        </div>
    )
}

export default Purpose;