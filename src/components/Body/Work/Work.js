import React from 'react'
import "./Work.css"
import Separator from '../../common/separator/Separator'
import { WorkData } from '../../data/WorkData'
import WorkCard from './WorkCard'

const Work = () => {
    const data = WorkData;
    return (
        <div className='work'>
            <Separator />
            <label className='section-title'>Work</label>
            <div className='work-list'>
                {
                    data.map((item) => {
                        return (
                            <WorkCard item={item} key={item.company} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Work
