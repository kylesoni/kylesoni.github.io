import React from 'react'
import { useParams } from "react-router-dom"
import {ResearchList} from "../helpers/ResearchList"
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/ResearchDisplay.css'

function ResearchDisplay() {
    const { id } = useParams()
    const project = ResearchList[id]
    return (
        <div className='research'>
            <h1 className='name'> {project.name}</h1>
            <img src={project.image} alt=""/>
            <h1 className='projectHeader'> About:</h1>
            <div className='projectAbout'>
            {project.about}
            </div>
            {project.special}
            <p className='skills'>
            <b>Skills:</b> {project.skills}
            </p>
            <a href = {project.github}>
            <GitHubIcon />
            </a>
        </div>
    )
}

export default ResearchDisplay