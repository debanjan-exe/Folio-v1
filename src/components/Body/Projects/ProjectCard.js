import React from 'react'
import "./ProjectCard.css"

const ProjectCard = ({ project }) => {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <label className='project-title'>{project.title}</label>
                <div className='project-links'>
                    {project.demo &&
                        <a className="project-link" href={project.demo}>
                            <div className='link-button'>
                                <i className="fi fi-rr-globe"></i>Demo
                            </div>
                        </a>}
                    {project.github &&
                        <a className="project-link" href={project.github}>
                            <div className='link-button'>
                                <i className="devicon-github-original colored"></i>Github
                            </div>
                        </a>
                    }
                </div>
                <p>
                    {project.about}
                </p>
                <div className="project-tags">
                    {project.tags.map((tag) => {
                        return (
                            <label className='tag' key={tag}>{tag}</label>
                        )
                    })}
                </div>
            </div>
            <img src={project.image} alt={project.title} className='project-photo' />
        </div >
    )
}

export default ProjectCard
