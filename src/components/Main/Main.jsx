import React from 'react'
import './Main.css'
import webdevsvg from '../../assets/img/webdevsvg.jpg'
import webdevsvg1 from '../../assets/img/webdevsvg1.jpg'
import webdevsvg2 from '../../assets/img/webdevsvg2.png'
import webdevsvg3 from '../../assets/img/webdevsvg3.png'
import webdevsvg5 from '../../assets/img/webdevsvg5.png'

const Main = () => {
  return (
    <div className='main'>
      <div className="mainleft maincont">
        <div className="mainhead">
            <h1>Build Your Website With Us!</h1>
            <ul className="mainlist">
            <li>Get a website that reflects your unique brand.</li>
            <li>Enjoy a smooth, user-friendly experience on any device.</li>
            <li>Let us handle everything—from design to launch.</li>
            </ul>
            <div className="mainbtn">
               <a href="#services"><button className="btn btn-primary">Our Services</button></a>
                <a href="#about"> <button className="btn btn-secondary">About Us →</button></a>
            </div>
        </div>
      </div>
      <div className="mainright maincont">
        <div className="imgbackground"></div>
        <img src={webdevsvg3} alt="" className='img1' />
        <img src={webdevsvg5} alt="" className='img2' />
      </div>
    </div>
  )
}

export default Main
