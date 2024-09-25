import React from 'react'
import { FaXTwitter } from "react-icons/fa6"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia"> 
          <a href='https://www.linkedin.com/in/kyle-soni-581636170/'>
              <LinkedInIcon />
          </a>
          <a href='mailto:kylesoni2142@gmail.com'>
              <EmailIcon />
          </a>
          <a href='https://github.com/kylesoni'>
              <GitHubIcon />
          </a>
          <a href="https://x.com/soni_kyle">
            <FaXTwitter />
          </a>
        </div>
        <p> &copy; 2024 kylesoni.github.io</p>
    </div>
  )
}

export default Footer