import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia"> 
            <LinkedInIcon />
            <GitHubIcon />
            <TwitterIcon />
        </div>
        <p> &copy; 2024 kylesoni.github.io</p>
    </div>
  )
}

export default Footer