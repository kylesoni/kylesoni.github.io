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
                        Safe Space is a 2D sandbox game where you collect resources to build a ship and escape a perilous planet.  As a 4-person team, we were
                        tasked with end-to-end delivery of a computer game, building it from the ground up using Unity and C#.
                    </p>
                    <p>
                        I was specifically responsible for level design, item design, character movement, two basic enemy-types, online art assets, and 
                        and the implementation of those assets (including the animations and parallax background). I also helped fix bugs for the inventory and block system.
                    </p>
                    <p>
                        This work involved the use Unity's animation and tiling tools, but features like movement, enemy AI, and items relied heavilty on C#
                        and principles from object-oriented programming.
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
        skills: "Python, SQL, Jupyter, Scipy, Matplotlib",
        about: <div>
                    <p>
                        The M-σ relation is a well-known correlation between the stellar velocity dispersion (σ) of a galaxy's bulge and the mass (M) of the supermassive black hole
                        at its center. To measure this relationship, I used mass measurements of black holes and the corresponding velocity dispersions compiled by a recent paper, 
                        checking the dispersion values with the HyperLEDA database for inconsistencies with modern results.
                    </p>
                    <p>
                        I used a Bayesian approach to fit a linear regression model, starting with a mathematical formulation of the liklihood. Because the data had uncertainties on both
                        axes, I projected the data to be orthogonal to a best fit line, accounting equally for both uncertainties. To account for outliers, I introduced 
                        a Gaussian distribution and combined it with the linear regression to create a mixture model.
                    </p>
                    <p>
                        I then performed Markov Chain Monte Carlo (MCMC) via the Metropolis-Hastings algorithm to fit the parameters and achieve an estimation for the M-σ relation.
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
        skills: "React, Javascript, CSS",
        about: <div>
                    <p>
                        This website was created using the React library for javascript. I coded each component using the route package, configured the visuals using CSS, and 
                        deployed the app using github pages.
                    </p>
                    <p>
                        
                    </p>
                    <h1 className='projectHeader'> Instructions:</h1>
                    <p>
                        Click the github link below to view the code.
                    </p>
                </div>,
        special: null,
        github: "https://github.com/kylesoni/kylesoni.github.io",
    },
    {
        name: "Calculating distance to the LMC",
        image: LMC,
        skills: "Python, SQL, Jupyter Notebooks, Scipy, Matplotlib",
        about: "Testing",
        special: null,
        github: "https://github.com/kylesoni/calculating-distance-to-the-lmc",
    },
    {
        name: "Award Ceremony Language Analysis",
        image: Award,
        skills: "Python, NLTK",
        about: "Testing",
        special: null,
        github: "https://github.com/kylesoni/award-ceremony-language-analysis",
    },
    {
        name: "Interactive Recipe Walkthrough",
        image: Recipes,
        skills: "Python, Spacy",
        about: "Testing",
        special: null,
        github: "https://github.com/kylesoni/recipe-parser-and-interactive-walkthrough",
    },
]