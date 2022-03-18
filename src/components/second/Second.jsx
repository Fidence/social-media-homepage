import React from 'react'
import "./second.scss"
import Image4 from "../Assets/image4.jpg";
import { PermMedia, Label, Room, EmojiEmotions, MoreVert } from "@material-ui/icons";
import Resturant from "../Assets/restuarant.jpg"
import Rainway from "../Assets/rainway.jpg"
import Shoe from "../Assets/shoe.jpeg"
import Orange from "../Assets/orange.webp"
import Tong from "../Assets/tong.webp"
import Like from "../Assets/like.png"
import Heart from "../Assets/heart.png"
import { useState } from 'react';


const Second = () => {
const [like, setLike] = useState(10)

const increase = () =>{
  setLike(like+1)

}
const decrease = () =>{
  setLike(like -1);

}



  return (
    <div className="second">
      <div className="second_1">
        <div className="second_2">
          <img src={Image4} alt="" />
          <input type="text" placeholder="what's on your mind Favour" />
        </div>
        <hr className="line1" />
        <div className="second_icons">
          <div className="iconlist">
            <PermMedia htmlColor="tomato" className="icon" />
            <span className="second_txt">Photo or video</span>
          </div>
          <div className="iconlist">
            <Label htmlColor="blue" className="icon" />
            <span className="second_txt">Tag</span>
          </div>
          <div className="iconlist">
            <Room htmlColor="green" className="icon" />
            <span className="second_txt">Location</span>
          </div>
          <div className="iconlist">
            <EmojiEmotions htmlColor="goldenrod" className="icon" />
            <span className="second_txt">Feelings</span>
          </div>
          <button className="secondbtn">Share</button>
        </div>
      </div>

      <div className="post">
        <div className="post_main">
          <div className="post_top">
            <div className="post_toptxt">
              <img src={Image4} alt="" />
              <span className="username">Favour Moses</span>
              <span className="time">7 mins ago</span>
            </div>

            <div className="post_topicon">
              <MoreVert />
            </div>
          </div>

          <div className="post_center">
            <span className="centertxt">你好，这个 是 我 第一的 发贴 :)</span>
            <img src={Resturant} alt="" />
          </div>

          <div className="post_bottom">
            <div className="bottomimg">
              <img onClick={increase} src={Like} className="bottomimg1" alt="" />
              <img onClick={decrease} src={Heart} className="bottomimg2" alt="" />
              <span className="liked">{like} people like it</span>
            </div>

            <div className="comment">
              <span className="comments">7 Comments</span>
            </div>
          </div>
        </div>
      </div>

      {/* second post */}

      <div className="post">
        <div className="post_main">
          <div className="post_top">
            <div className="post_toptxt">
              <img src={Image4} alt="" />
              <span className="username">Favour Moses</span>
              <span className="time">7 mins ago</span>
            </div>

            <div className="post_topicon">
              <MoreVert />
            </div>
          </div>

          <div className="post_center">
            <span className="centertxt">你好，这个 是 我 第一的 发贴 :)</span>
            <img src={Rainway} alt="" />
          </div>

          <div className="post_bottom">
            <div className="bottomimg">
              <img onClick={Like} src={Like} className="bottomimg1" alt="" />
              <img src={Heart} className="bottomimg2" alt="" />
              <span className="liked">30 people like it</span>
            </div>

            <div className="comment">
              <span className="comments">7 Comments</span>
            </div>
          </div>
        </div>
      </div>

      {/* thirth post */}

      <div className="post">
        <div className="post_main">
          <div className="post_top">
            <div className="post_toptxt">
              <img src={Image4} alt="" />
              <span className="username">Favour Moses</span>
              <span className="time">7 mins ago</span>
            </div>

            <div className="post_topicon">
              <MoreVert />
            </div>
          </div>

          <div className="post_center">
            <span className="centertxt">你好，这个 是 我 第一的 发贴 :)</span>
            <img src={Orange} alt="" />
          </div>

          <div className="post_bottom">
            <div className="bottomimg">
              <img src={Like} className="bottomimg1" alt="" />
              <img src={Heart} className="bottomimg2" alt="" />
              <span className="liked">30 people like it</span>
            </div>

            <div className="comment">
              <span className="comments">7 Comments</span>
            </div>
          </div>
        </div>
      </div>

      {/* fourth post */}

      <div className="post">
        <div className="post_main">
          <div className="post_top">
            <div className="post_toptxt">
              <img src={Image4} alt="" />
              <span className="username">Favour Moses</span>
              <span className="time">7 mins ago</span>
            </div>

            <div className="post_topicon">
              <MoreVert />
            </div>
          </div>

          <div className="post_center">
            <span className="centertxt">你好，这个 是 我 第一的 发贴 :)</span>
            <img src={Tong} alt="" />
          </div>

          <div className="post_bottom">
            <div className="bottomimg">
              <img onClick={increase} src={Like} className="bottomimg1" alt="" />
              <img src={Heart} className="bottomimg2" alt="" />
              <span className="liked">{like} people like it</span>
            </div>

            <div className="comment">
              <span className="comments">7 Comments</span>
            </div>
          </div>
        </div>
      </div>

      {/* fifth post */}

      <div className="post">
        <div className="post_main">
          <div className="post_top">
            <div className="post_toptxt">
              <img src={Image4} alt="" />
              <span className="username">Favour Moses</span>
              <span className="time">7 mins ago</span>
            </div>

            <div className="post_topicon">
              <MoreVert />
            </div>
          </div>

          <div className="post_center">
            <span className="centertxt">你好，这个 是 我 第一的 发贴 :)</span>
            <img src={Shoe} alt="" />
          </div>

          <div className="post_bottom">
            <div className="bottomimg">
              <img src={Like} className="bottomimg1" alt="" />
              <img src={Heart} className="bottomimg2" alt="" />
              <span className="liked">30 people like it</span>
            </div>

            <div className="comment">
              <span className="comments">7 Comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second