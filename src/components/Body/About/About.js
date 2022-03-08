import React from 'react'
import SocialContact from '../../common/social-contact/SocialContact'
import "./About.css"

const About = () => {
    return (
        <div className='about'>
            <div className="about-top">
                <div className='about-info'>
                    Hello There 🤘🏻, I am <br /> <span className='info-name'>Debanjan,</span> <br /> Upcoming Graduate of computer science with experience across the full-stack software
                    development.<br /><span className='info-line'> love experimenting with web.</span>
                </div>
                <div className='about-photo'>
                    <img src={require("../../../assets/Programmer-cuate.png")} alt="img" className='picture' />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About
