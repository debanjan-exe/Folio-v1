import React from 'react'
import { SocialData } from '../../data/SocialData'
import "./SocialContact.css"

const SocialContact = () => {
    const data = SocialData;
    return (
        <div className='social-contact'>
            {data.map((item) => {
                return (
                    <a href={item.link} target="_blank" rel='noopener noreferrer' key={item.platform}>
                        <div className="social-icon-div">
                            <img src={item.icon} alt={item.platform} className='social-icon' />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact
