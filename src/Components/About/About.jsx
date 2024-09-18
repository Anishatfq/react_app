import React from 'react'
import about from '../Assets/about.jpg'
import './About.css'

const About = () => {
  return (
    <div>
      <div className="about-hero">
        <div className="heading">
          <h1>About Us</h1>
        </div>
        <div className="container">
          <div className="hero-content">
            <h2>Welcome to MyKart</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non quas quisquam corrupti ab dolorum voluptatibus iure molestiae, sapiente sunt, ea consequuntur illo voluptate! Facere a expedita officiis ad pariatur hic!</p>
          </div>
          <div className="about-hero-image">
            <img src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About