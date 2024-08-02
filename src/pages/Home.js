import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/Home.css"
import Portrait from "../assets/KyleSoniPortrait.png"

function Home() {
  return (
    <div className="home">
        <div className="about"> 
            <img src={Portrait} alt=""/>
            <h2> Kyle Soni</h2>
            <div className="prompt"> 
                <p> 
                    A software and data engineer. 
                </p>
                <a href='https://www.linkedin.com/in/kyle-soni-581636170/'>
                    <LinkedInIcon />
                </a>
                <a href='mailto:kylesoni2142@gmail.com'>
                    <EmailIcon />
                </a>
                <a href='https://github.com/kylesoni'>
                    <GitHubIcon />
                </a>
            </div>
        </div>
        <div className="skills">

            <h1> Skills </h1>
            <ol className='list'>
                <li className='item'>
                    <h2> Technical</h2>
                    <span>
                        Python, R, SQL, C, C++, C#, Unity, Jupyter Notebooks, MS Office, Git
                    </span>
                </li>
                <li className='item'>
                    <h2> Soft</h2>
                    <span> 
                        Teamwork, Communication, Leadership, Time Management, Adaptability
                    </span>
                </li>
                <li className='item'>
                    <h2> Additional</h2>
                    <span> 
                        SDLC (Software Development Life Cycle), Northwestern QUEST (Computing Cluster)
                    </span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home