
import React from 'react'

export default function ConnectForm() {
  return (
    <div className=""
        style={{
          borderRadius:'15px',
          // border:"solid grey 5px",
          width: "100%"
        }}>
          {/* <h2 
            style={{
            fontWeight: 100
            }}
            className="section-2-heading-desktop"
            data-aos="fade-left" 
            data-aos-duration="500" 
            data-aos-once="true"
          ><br/>
            Happy to help you
          </h2> */}
      <div class="position-relative bg-default-2 bg-pattern pattern-2 pdr-sct">
       <div class="container">
         <div class="row justify-content-center align-items-center">
          
           <div class="col-lg-8 order-lg-1" data-aos="fade-right" data-aos-duration="500" data-aos-once="true">
             <div class="hero-content mt-11 mt-lg-0">
               <h2 class="title gr-text-2 mb-6 mt-6 rdstr" id="amhver">Address :</h2>
               {/* <p class="gr-text-8 mb-11 pr-md-12 clscls"> <i> */}
                   <span style={{marginLeft:'30px'}}>
                       <i>
                        RANKPEDIA PRIVATE LIMITED<br/>
                        No.1143, Second Floor, 6th Main Road, 7th Sector, HSR Layout, Bangalore,<br/>
                        Bangalore, Karnataka, India, 560102
                           {/* No. 520, Survey No 186/26, 26A, <br/>
                       Second Floor, Outer Ring Rd, <br/>
                       above Ford Elite Showroom, <br/>
                       Mahadevapura, Bengaluru. <br/>
                       Karnataka 560048.<br/> */}
                       {/* Phone: +91 00000 00000. */}

                       </i></span>
                   {/* </i></p> */}
             </div>
           </div>
           
           <div class="col-8 col-lg-4  order-lg-2">
             <div class="hero-img position-relative flt-lfthr" data-aos="fade-left" data-aos-duration="500" data-aos-once="true">
               <div class="hero-btn" >
                 {/* <ButtonModal/> */}
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>	
          {/* <p style={{
            padding:'10px',
            MarginLeft:'10px'
          }}>
            
          </p> */}
        </div>
  )
}
