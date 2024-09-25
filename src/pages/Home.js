import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/Home.css"
import Portrait from "../assets/KyleSoniPortrait.png"
import Mo1 from "../assets/mo1.jpeg"
import Mo2 from "../assets/mo2.jpeg"

function Home() {
  return (
    <div className="home">
        <div className="about"> 
            <img src={Portrait} alt=""/>
            <h2> Kyle Soni</h2>
            <div className="prompt"> 
                <p> 
                    A computer science, physics, and integrated science graduate interested in software development and data science.
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
            <ol className='list'>
                <li className='item'>
                    <h2> About</h2>
                    <p>
                        Hello! My name is Kyle Soni, and I graduated from Northwestern University in June 2024. During my time there, I completed the Integrated Science Program (ISP), a rigorous program
                        that requires students to pursue advanced coursework, in Math, Physics, Statistics, Biology, and Chemistry. My interdisciplinary interest also drove me to join the Istvan Kovacs Lab in 
                        Complex Systems, where I pursued projects in neurobiology and network theory.
                    </p>
                    <p>
                        In my post-graduation, I worked to finish my network modeling project with the lab, culminating with a paper.
                    </p>
                    <div className='row'>
                        <div className='column'>
                            <img src={Mo1} alt="" />
                        </div>
                        <div className='column'>
                            <img src={Mo2} alt=""/>
                        </div>
                    </div>
                </li>
                <li className='item'>
                    <h2> Languages</h2>
                    <span> 
                        Python, C, C++, C#, R, JavaScript, CSS, SQL
                    </span>
                </li>
                <li className='item'>
                    <h2> Technical Skills</h2>
                    <span>
                        Python Packages (Numpy, Matplotlib, Pandas), Unix, Jupyter, Git, SDLC
                    </span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home