import React from 'react'
import ResearchItem from '../components/ResearchItem'
import { ResearchList } from '../helpers/ResearchList'

import "../styles/Research.css"

function Research() {
return (
    <div className='researches'>
        <h1 className='researchTitle'> Research Projects</h1>
        <div className='researchList'>
            {ResearchList.map((project, idx) => {
                return <ResearchItem id={idx} name={project.name} image={project.image} />
            })}
        </div>
    </div>
    )
}

export default Research