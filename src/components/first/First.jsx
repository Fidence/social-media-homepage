import React from 'react'
import "./first.scss"
import { Friends } from '../dummy/friends'
import {RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@material-ui/icons";

const First = () => {
  return (
    <div className="first">
      <div className="first_container">
        <ul className="first_list">
          <li className="first_item">
            <RssFeed className="firsticon" />
            <span className="itemtxt">Feed</span>
          </li>
          <li className="first_item">
            <Chat className="firsticon" />
            <span className="itemtxt">Chats</span>
          </li>
          <li className="first_item">
            <PlayCircleFilledOutlined className="firsticon" />
            <span className="itemtxt">Videos</span>
          </li>
          <li className="first_item">
            <Group className="firsticon" />
            <span className="itemtxt">Groups</span>
          </li>
          <li className="first_item">
            <Bookmark className="firsticon" />
            <span className="itemtxt">Bookmark</span>
          </li>
          <li className="first_item">
            <HelpOutline className="firsticon" />
            <span className="itemtxt">Questions</span>
          </li>
          <li className="first_item">
            <WorkOutline className="firsticon" />
            <span className="itemtxt">Jobs</span>
          </li>
          <li className="first_item">
            <Event className="firsticon" />
            <span className="itemtxt">Events</span>
          </li>
          <li className="first_item">
            <School className="firsticon" />
            <span className="itemtxt">Courses</span>
          </li>
        </ul>
        <button className="btn1">Show More</button>
        <hr className="line" />
        <ul className="friends">
          {Friends.map((Friend)=>
          <li className="friendlist">
            <img src={Friend.img} alt="" />
            <span className="friendname">{Friend.username}</span>
          </li>
           )}
        </ul>
      </div>
    </div>
  );
}

export default First;