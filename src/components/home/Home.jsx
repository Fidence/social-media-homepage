import React from 'react'
import "./home.scss"
import Topbar from "../Topbar/Topbar"
import First from "../first/First"
import Second from "../second/Second"
import Third from "../third/Third"

const Home = () => {
  return (
    <div>
      <Topbar />

      <div className='flex_container'>
        <First />
        <Second/>
        <Third/>
      </div>

    </div>
  );
}

export default Home