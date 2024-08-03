import React from 'react'
import { useParams } from "react-router-dom"
import {ProjectList} from "../helpers/ProjectList"
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
  const { id } = useParams()
  const project = ProjectList[id]
  return (
    <div className='project'>
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

export default ProjectDisplay