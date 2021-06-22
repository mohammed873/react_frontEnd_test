import React from 'react';
import '../App.css'
import badge1 from '../images/img1.png'
import badge2 from '../images/img2.png'
import badge3 from '../images/img3.png'
export default function MiddleSection() {
  return (
    <>
       <div className="middle_section">
            <div className="roundDiv">
               <img style={{width: "100%"}} src={badge1} alt="badge1" />
               <br/><br/>
               <h4>Random Text</h4>
               <p >Lorem Ipsum is simply dummy text industry. Lorem Ipsum has bee0s</p>
            </div>
            <div className="roundDiv">
               <img style={{width: "100%"}} src={badge2} alt="badge2" />
               <br/><br/>
               <h4>Random Text</h4>
               <p >Lorem Ipsum is simply dummy text industry. Lorem Ipsum has bee0s</p>
            </div>
            <div className="roundDiv">
               <img style={{width: "100%"}} src={badge3} alt="badge3" />
               <br/><br/>
               <h4>Random Text</h4>
               <p >Lorem Ipsum is simply dummy text industry. Lorem Ipsum has bee0s</p>
            </div>
         </div>
    </>
  );
}
