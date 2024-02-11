import React from 'react'
import "./third.scss"
import Gift from "../Assets/gift.png"
import Birthday from "../Assets/irth2.webp"
import { Friends } from '../dummy/friends'



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
            {Friends.map((Friend)=>


            <li className="friendslist">

              <div className='onlinefriends'>
                <img src={Friend.img} alt="" />
             <div className={Friend.online?"empty":"empti"}></div>
              </div>

              <p>{Friend.username}</p>
              
            </li>
            )}
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Third;