import React from 'react'
import { ProjectData } from '../../data/ProjectsData'
import "./Projects.css"
import ProjectCard from "./ProjectCard"
import Separator from "../../common/separator/Separator"

const Projects = () => {
    const data = ProjectData;
    return (
        <div className='projects'>
            <Separator />
            <label className='section-title'>
                Projects
            </label>
            <div>
                {data.map((project) => {
                    return <ProjectCard key={project.id} project={project} />
                })}
            </div>
        </div>
    )
}

export default Projects
