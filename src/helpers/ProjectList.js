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
        about: <div className='projectAbout'>
                    <h1> About:</h1>
                    <p>
                        Safe Space is a 2D sandbox game where you collect resources to build a ship and escape a perilous planet.  As a 4-person team, we were
                        tasked with end-to-end delivery of a computer game, building it from the ground up using Unity and C#.
                    </p>
                    <p>
                        I was specifically responsible for level design, item design, character movement, two basic enemy-types, online art assets, and 
                        and the implementation of those assets (including the animations and parallax background). I also helped fix bugs for the inventory and block system.
                    </p>
                    <p>
                        This work involved the use of Unity's tools and API, but features like movement, enemy AI, and items relied heavily on C#
                        and principles from object-oriented programming.
                    </p>
                    <h1> Instructions:</h1>
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
        about: <div className='projectAbout'>
                    <h1> About:</h1>
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
        about: <div className='projectAbout'>
                    <h1> About:</h1>
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
        skills: "Python, SQL, Jupyter, Scipy, Matplotlib",
        about: <div className='projectAbout'>
                    <h1> About:</h1>
                    <p>
                        In this project, I used astronomical data from the Gaia mission and OGLE light curves to calculate the distance to the Large Magellanic Cloud, a nearby galaxy. 
                        This required the use of SQL and extensive Python analysis.
                    </p>
                    <p>
                        Specifically, I used parallax measurements from Gaia to calculate distance to stars in the Milky Way, calibrating the Period-Luminosity relationship. I was then able
                        to use the OGLE light curves to determine the pulsation period of stars in the LMC, using the calibrated relationship to find the distance.
                    </p>
                    <p>
                        This project is very astronomy focused, but I gained experience working with data from multiple large databases and completing a multi-step analysis to perform a measurement.
                    </p>
                    <h1 className='projectHeader'> Instructions:</h1>
                    <p>
                        Click the github link below to view the code or view the final report <a href='https://nbviewer.org/github/kylesoni/calculating-distance-to-the-lmc/blob/main/annotated-ASTRON_321_final_report.pdf'> here</a>.
                    </p>
                </div>,
        special: null,
        github: "https://github.com/kylesoni/calculating-distance-to-the-lmc",
    },
    {
        name: "Interactive Recipe Walkthrough",
        image: Recipes,
        skills: "Python, Spacy",
        about: <div className='projectAbout'>
                    <h1> About:</h1>
                    <p>
                        This project is an interactive chatbot that takes recipes from <a href='https://www.allrecipes.com/'>allrecpies.com</a> and walks the user through the process. To achieve this, we parsed the important information from
                        each recipe using a combination of regular expressions and the <a href='https://spacy.io/'>spacy</a> library for syntactic parsing. 
                    </p>
                    <p>
                        We then created a command-line chatbot to relay the parsed information to the user in an interactive way. The available information includes ingredient amount and prep, cooking time, required tools, and more.
                    </p>
                    <h1 className='projectHeader'> Instructions:</h1>
                    <p>
                        Click the github link below to view the code and run the program. This <a href='https://nbviewer.org/github/kylesoni/recipe-parser-and-interactive-walkthrough/blob/main/cs337.mp4'>video</a> provides a demonstration of its capabilities.
                    </p>
                </div>,
        special: null,
        github: "https://github.com/kylesoni/recipe-parser-and-interactive-walkthrough",
    },
    {
        name: "Award Ceremony Language Analysis",
        image: Award,
        skills: "Python, NLTK",
        about: <div className='projectAbout'>
                    <h1> About:</h1>
                    <p>
                        This project extracts information about famous award ceremony outcomes from a large dataset of tweets following the corresponding award ceremony. It takes the specific categories of the award ceremony as input (e.g. Best Director),
                        analyzes the tweets using regular expressions, and outputs the winners, nominees, presenters, and hosts of the award show.
                    </p>
                    <p>
                        The project was done fully in python using tools from NLTK, and it taught me the fundamentals of natural language processing.
                    </p>
                    <h1 className='projectHeader'> Instructions:</h1>
                    <p>
                        Click the github link below to view the code and follow instructions to run the program.
                    </p>
                </div>,
        special: null,
        github: "https://github.com/kylesoni/award-ceremony-language-analysis",
    },
]