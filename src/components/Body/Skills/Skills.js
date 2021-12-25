import React from 'react'
import Separator from '../../common/separator/Separator'
import { SkillsData } from '../../data/SkillsData'
import SkillCard from './SkillCard'
import "./Skills.css"

const Skills = () => {
    const data = SkillsData;
    return (
        <div className='skills'>
            <Separator />
            <label className='section-title'>Skills</label>
            <div className="skills-container">
                {
                    data.map((item) => {
                        return (
                            <div className="skills-section" key={item.type}>
                                <label className='skills-section-title'>{item.type}</label>

                                <div className="skills-list">
                                    {
                                        item.list.map((skill) => {
                                            return (
                                                <SkillCard skill={skill} key={skill.name} />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills
