import React from 'react'
import './Hero.css'
import hero from '../Assets/logo.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <button>Ứng dụng quản lý nhà, căn hộ, phòng trọ cho người cho thuê và đi thuê</button>
      </div>
      <div className="hero-right">
        <img src={hero} alt="" />
      </div>
    </div>
  )
}

export default Hero
