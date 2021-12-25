import React from 'react'
import "./WorkCard.css"

const WorkCard = ({ item }) => {
    return (
        <div className='work-card'>
            <img src={item.companyLogo} className='work-logo' alt={item.company} />
            <div className='work-info'>
                <label className='company-name'>{item.company}</label>
                <div className='work-dates'>
                    <label>{item.dateOfJoining}</label>-<label>{item.dateEnd}</label>
                </div>
                <div className='work-desc'>
                    <p>{item.work}</p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
