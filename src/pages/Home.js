import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email"
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/Home.css"
import Portrait from "../assets/KyleSoniPortrait.png"
import Mo1 from "../assets/mo1.jpeg"

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
                        Hello! My name is Kyle Soni, and I graduated from Northwestern University in June 2024. During my time there, I majored in computer science, physics, and integrated science. 
                        This work was part of the Integrated Science Program (ISP), a rigorous program that requires students to pursue advanced coursework in math, chemistry, physics, biology, and statistics.
                    </p>
                    <p>
                        I enjoyed deepening my understanding in a variety of subjects, and I learned how to apply interdisciplinary approaches to problems in biology, mathematics, and computer science through my 3 years of research experience
                        with Professor Istvan Kovacs.
                    </p>
                    <p>
                        As a post-graduate, I'm interested in software development and data science roles. My main focus as a student was in research and data analysis, but I've gained experience in full stack development through advanced coursework 
                        and personal projects.
                    </p>
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
                <li className='item'>
                    <h2> Personal Interests</h2>
                    <ul>
                        <li>PC building</li>
                        <li>Playing drums and piano</li>
                        <li>My cat (pictured below)</li>
                    </ul>
                    <img src={Mo1} alt="" />
                    <figcaption> Mo Soni </figcaption>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home