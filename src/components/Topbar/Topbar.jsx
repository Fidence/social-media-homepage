import React from 'react'
import "./topbar.scss"
import {Search, Person, Chat, Notifications} from "@material-ui/icons"
import Image4 from "../Assets/image4.jpg"

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar_left">
        <h3>Fidence</h3>
      </div>
      <div className="topbar_center">
        <div className="search">
          <Search className='search_icon'/>
          <input type="text" placeholder="search for friends, post or video" />
        </div>
      </div>

      <div className="topbar_right">
        <div className="topbar_list">
          <li>Homepage</li>
          <li>Timeline</li>
        </div>

        <div className="topbar_icons">
          <div className="personicon">
            <Person />
            <span className="badge">1</span>
          </div>
          <div className="personicon">
            <Chat />
            <span className="badge">8</span>
          </div>
          <div className="personicon">
            <Notifications />
            <span className="badge">5</span>
          </div>
        </div>
        <div className="topbar_img">
          <img src={Image4} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Topbar