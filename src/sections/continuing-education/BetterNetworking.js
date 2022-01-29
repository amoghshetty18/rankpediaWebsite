import React from 'react';
import ImagePara from '../../components/ImageLeft';

function BetterNetworking() {
    return (
        <div>
            <ImagePara
            imgPos={"right"}
            title={"Better Networking"}
            paragraph={"Continuing Education at Rankpedia allows the students to meet new people through forums, conferences, or workshops that will benefit them further their careers in some way or the other."}
            >
                <ul>
                    <li>
                    Continuing Education at Rankpedia allows the students to meet new people through forums, conferences, or workshops that will benefit them further their careers in some way or the other. 
                    </li>
                    <li>
                    Staying connected with people from multiple cultures will be an opportunity to broaden their learning horizons.
                    </li>
                    <li>
                    The students become more competent and they understand the curriculum from a global perspective ensuring that the students are exposed to various cultures, languages, ethnicities, etc. 
                    </li>
                    
                </ul>
            </ImagePara>
            <ImagePara
            imgPos={"left"}
            title={"Target Audiences"}
            paragraph={"High School students, Graduate and Post-graduate students, Professionals"}
            >
                <ul>
                    <li>
                    High School students who want to optimize their vocational skills.
                    </li>
                    <li>
                    Graduate and Post-graduate students seeking work experience and employability skills.
                    </li>
                    <li>
                    Professionals who wish to upscale their skills in order to upgrade in their career. 
                    </li>
                </ul>
            </ImagePara>
        </div>
    );
}

export default BetterNetworking;