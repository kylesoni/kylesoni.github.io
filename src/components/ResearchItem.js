import React from 'react'
import { useNavigate } from "react-router-dom"

function ResearchItem({image, name, id}) {
    const navigate = useNavigate();
    return (
        <div 
            className='researchItem'
            onClick={() => {
                navigate("/research/" + id)
            }}
        >
            <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
            <h1> {name} </h1>
        </div>
    )
}

export default ResearchItem