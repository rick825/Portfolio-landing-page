import React from 'react'
import './Main.css'
import webdevsvg from '../../assets/img/webdevsvg.jpg'
import webdevsvg1 from '../../assets/img/webdevsvg1.jpg'
import webdevsvg2 from '../../assets/img/webdevsvg2.png'
import webdevsvg3 from '../../assets/img/webdevsvg3.png'
import webdevsvg4 from '../../assets/img/webdevsvg4.png'
import webdevsvg5 from '../../assets/img/webdevsvg5.png'

const Main = () => {
  return (
    <div className='main'>
      <div className="mainleft maincont">
        <div className="mainhead">
            <h1>Build Your Website With Us!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, soluta ad consequuntur consectetur praesentium asperiores rem porro dignissimos eius iusto sint enim aperiam ipsam tenetur quo ut labore possimus ipsum.</p>
            <div className="mainbtn">
                <button className="btn btn-primary">Get Started</button>
                <button className="btn btn-secondary">Learn More →</button>
            </div>
        </div>
      </div>
      <div className="mainright maincont">
        {/* <img src={webdevsvg1} alt="" className='img1' /> */}
        <div className="imgbackground"></div>
        <img src={webdevsvg3} alt="" className='img1' />
        <img src={webdevsvg5} alt="" className='img2' />
        {/* <img src={webdevsvg1} alt="" className='img4' /> */}
      </div>
    </div>
  )
}

export default Main