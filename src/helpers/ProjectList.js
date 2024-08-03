import SafeSpace from '../assets/safespace.png'
import BlackHole from '../assets/blackhole.png'
import Portrait from '../assets/KyleSoniPortrait.png'
import LMC from '../assets/lmc.jpg'
import Award from '../assets/awards.webp'
import Recipes from '../assets/recipe.jpg'

export const ProjectList = [
    {
        name: "Safe Space 2D Sandbox Game",
        image: SafeSpace,
        skills: "C#, Unity",
        about: <div>
                    <p>
                        As a member of a 4-person team, I designed and built a 2D game in the Unity engine, gaining experience with C# and the Unity API. 
                    </p>
                    <p>
                        I was specifically responsible for level design, item design, character movement, two basic enemy-types, finding online art assets, and 
                        finally implementing those assets (including the animations and parallax background). I also helped fix bugs for the inventory and block system.
                    </p>
                    <h1 className='projectHeader'> Instructions:</h1>
                    <p>
                        Click the link below to try the game in your browser!
                    </p>
                </div>,
        special: <iframe frameborder="0" src="https://itch.io/embed/2808215?link_color=3e2469" width="208" height="167" title='Safe Space'> <a href="https://kylesoni.itch.io/safe-space">Safe Space by kylesoni, Chestnut:), sillc</a> </iframe>,
        github: "https://github.com/kylesoni/Safe-Space"
    },
    {
        name: "Measuring the M-σ relation",
        image: BlackHole,
        skills: "Python, SQL, Jupyter Notebooks, Scipy, Matplotlib",
        about: <div>
                    <p>
                        In my graduate-level statistical methods course, I analyzed the data 
                    </p>
                    <h1 className='projectHeader'> Instructions:</h1>
                    <p>
                        Click the github link below to view the full report and code.
                    </p>
               </div>,
        special: null,
        github: "https://github.com/kylesoni/measuring-the-m-sigma-relation",
    },
    {
        name: "Personal Website",
        image: Portrait,
        skills: "React.js, CSS",
        about: "Testing",
        special: null,
        github: "https://github.com/kylesoni/kylesoni.github.io",
    },
    {
        name: "Calculating distance to the LMC",
        image: LMC,
        skills: "Python, SQL, Jupyter Notebooks, Scipy, Matplotlib",
        about: "Testing",
        special: null,
        github: "",
    },
    {
        name: "Award Ceremony Language Analysis",
        image: Award,
        skills: "Python, NLTK",
        about: "Testing",
        special: null,
        github: "https://github.com/kylesoni/cs337-project1",
    },
    {
        name: "Interactive Recipe Walkthrough",
        image: Recipes,
        skills: "Python, Spacy",
        about: "Testing",
        special: null,
        github: "https://github.com/kylesoni/cs337-project2",
    },
]