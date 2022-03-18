import React from 'react'
import "./third.scss"
import Gift from "../Assets/gift.png"
import Birthday from "../Assets/irth2.webp"
import Img1 from "../Assets/img1.jpg"


const Third = () => {
  return (
    <div className="third">
      <div className="third_main">
        <div className="birthday">
          <img src={Gift} alt="" />
          <p>
            <strong>Jacob Wisdom</strong> and <strong>3 other friends</strong>{" "}
            have a birthday today
          </p>
        </div>
        <div className="birthimg">
          <img src={Birthday} alt="" />
        </div>
        <div className="online">
          <h4>Online friends</h4>
          <ul className="friends">
            <li className="friendslist">

              <div className='onlinefriends'>
                <img src={Img1} alt="" />
                <div className='empty'></div>
              </div>

              <p>Sandy Gray</p>
              
            </li>
            <li className="friendslist">

              <div className='onlinefriends'>
                <img src={Img1} alt="" />
                <div className='empty'></div>
              </div>

              <p>Sandy Gray</p>
              
            </li>
            <li className="friendslist">

              <div className='onlinefriends'>
                <img src={Img1} alt="" />
                <div className='empty'></div>
              </div>

              <p>Sandy Gray</p>
              
            </li>
            <li className="friendslist">

              <div className='onlinefriends'>
                <img src={Img1} alt="" />
                <div className='empty'></div>
              </div>

              <p>Sandy Gray</p>
              
            </li>
            <li className="friendslist">

              <div className='onlinefriends'>
                <img src={Img1} alt="" />
                <div className='empty'></div>
              </div>

              <p>Sandy Gray</p>
              
            </li>
            <li className="friendslist">

              <div className='onlinefriends'>
                <img src={Img1} alt="" />
                <div className='empty'></div>
              </div>

              <p>Sandy Gray</p>
              
            </li>
            <li className="friendslist">

              <div className='onlinefriends'>
                <img src={Img1} alt="" />
                <div className='empty'></div>
              </div>

              <p>Sandy Gray</p>
              
            </li>
            <li className="friendslist">

              <div className='onlinefriends'>
                <img src={Img1} alt="" />
                <div className='empty'></div>
              </div>

              <p>Sandy Gray</p>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Third