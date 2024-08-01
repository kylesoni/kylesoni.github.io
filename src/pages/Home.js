import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
        <div className="about"> 
            <h2> Hi, My Name is Kyle</h2>
            <div className="prompt"> 
                <p> 
                    A software and data engineer. 
                </p> 
                <LinkedInIcon />
                <EmailIcon />
                <GitHubIcon />
            </div>
        </div>
        <div className="skills">

            <h1> Skills </h1>
            <ol className='list'>
                <li className='item'>
                    <h2> Technical</h2>
                    <span>
                        Python, C, C++, C#
                    </span>
                </li>
                <li className='item'>
                    <h2> Additional Skills</h2>
                    <span> 
                        Unity, SQL
                    </span>
                </li>
                <li className='item'>
                    <h2> Languages</h2>
                    <span> 
                        Stuff
                    </span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home