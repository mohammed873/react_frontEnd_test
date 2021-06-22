import React from 'react';
import '../App.css'
import pic1 from '../images/pic1.jpg'
import pic2 from '../images/pic2.png'
import pic3 from '../images/pic3.jpg'
import pic4 from '../images/pic4.jpg'
import pic5 from '../images/pic5.jpg'
import pic6 from '../images/pic6.jpg'
import pic7 from '../images/pic7.jpg'
import pic8 from '../images/pic8.jpg'
import pic9 from '../images/pic9.png'

export default function GallerySection() {
  return (
    <>
      <div className="gallery_section">
          <div className="rows">
            <div className="culumRow">
                <div className="pic1">
                   <img src={pic1} alt="image1"/>
                </div>
                <br/>
                <div className="pic2">
                   <img src={pic2} alt="image2"/>
                </div>
                <br/>
                <div className="pic3">
                  <img src={pic3} alt="image3"/> 
                </div>
            </div>

            <div className="culumRow">
                <div className="pic4">
                   <img src={pic4} alt="image1"/>
                </div>
                <br/>
                <div className="pic5">
                   <img src={pic5} alt="image2"/>
                </div>
                <br/>
                <div className="pic6">
                  <img src={pic6} alt="image3"/> 
                </div>
            </div>

            <div className="culumRow">
                <div className="pic7">
                   <img src={pic7} alt="image1"/>
                </div>
                <br/>
                <div className="pic8">
                   <img src={pic8} alt="image2"/>
                </div>
                <br/>
                <div className="pic9">
                  <img src={pic9} alt="image3"/> 
                </div>
            </div>
          </div>
      </div>
    </>
  );
}
