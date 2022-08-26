import React from 'react'
import Separator from '../../common/separator/Separator'
import SocialContact from '../../common/social-contact/SocialContact'
import "./Contact.css"

const Contact = () => {
    return (
        <div className='contact'>
            <Separator />
            <label className='section-title'>Contact</label>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch ? Connect me on my any of the platform</p>
                    <SocialContact />
                </div>
                <div className='download'>
                    <a target="_blank" href="https://drive.google.com/file/d/1XxUokykA9fHYpGfUitloMNHW1H0Jp9t3/view?usp=sharing" rel="noreferrer">
                        <i className="fi fi-rr-cloud-download download-icon"></i>
                        Resume
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
