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
            <h1> {project.name}</h1>
            <img src={project.image} alt=""/>
            <div className='researchAbout'>
            {project.about}
            </div>
            <p>
            <b>Skills:</b> {project.skills}
            </p>
            {project.special}
            <GitHubIcon />
        </div>
    )
}

export default ResearchDisplay