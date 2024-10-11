import Network from '../assets/network.png'
import Genes from '../assets/genetics.jpg'
import BAfig1 from '../assets/figures/updated_deg_dist.png'
import BAfig2 from '../assets/figures/updated_max_degree_twos.png'

export const ResearchList = [
    {
        name: "Emergent Node Stratification in Simple Network Growth Models",
        image: Network,
        skills: "Python (numpy, networkX), Cytoscape",
        about: <div className='projectAbout'>
                <h1> About:</h1>
                    <p>
                        This project was part of the Kovacs Lab at Northwestern University, collaborating with mathematicians from the Renyi Institute of Mathematics
                        and Central European University. In the field of network science, we studied a new variation of preferential attachment Models, producing novel characteristics
                        from simple rules.
                    </p>
                    <p>
                        A preferential attachment model starts with a simple graph (e.g. three fully connected nodes), and adds new nodes one a time. The way the node connects
                        to existing nodes is based on a user defined probability distribution. The most famous example of this model is the <b>Barabasi-Albert</b> (BA) model, where a node 
                        is weighted by its number of neighbors. In other words, nodes with lots of connections are likely to get more connections, naturally creating hubs.
                    </p>
                    <p>
                        Our model is called the <b>k2</b> model, and we give weight to the number of second neighbors rather than neighbors. Second neighbors are nodes that
                        are walks of length 2 away from the existing node (i.e. friends of friends). This still gives preference to nodes with lots of connections, but unlike the BA model,
                        it takes into account the broader network structure. This behavior is also more realistic, since in real life networks (e.g. scientific collaborations), it is advantageous
                        to have well connected neighbors.
                    </p>
                    <p>
                        Building on this work, we wanted to find a phase transition between the behavior of the k2 and BA models. To do this, we created a two step preferential attachment ruleset.
                        First, we select a node based on <b>k<sup>&alpha;</sup></b>, where k is the degree of a node and &alpha; is a chosen parameter between 0 and 2. Then, we attach to a random neighbor of the
                        selected node.
                    </p>
                    <p>
                        This process is a little convoluted, but the important idea is that our work created a continuum of models for 0 &le; &alpha; &le; 2. For an idea of how this affected the characteristics
                        of the network, the degree distributions are shown below.
                    </p>
                    <img src={BAfig1} alt="" className='figure'/>
                    <h1> Technical Details:</h1>
                    <p>
                        My main contribution to this project was writing and managing the codebase for network generation. There is a naive way to keep track of all the walks of length 2 with
                        the adjacency matrix, but I used some efficient data structures to achieve effectively O(n) time complexity, allowing us to generate networks up to 1 million nodes in size.
                    </p>
                    <p>
                        For the alpha models, I used some tricks with grouping nodes that don't affect time complexity but greatly decreased the pracitcal runtime. This allowed us to generate networks
                        up to 100k nodes in size. Using these networks, we analyzed various characteristics (max degree, diameter, etc.) to get a better understanding of the differences between the models.
                        One example is shown below.
                    </p>
                    <img src={BAfig2} alt="" className='figure'/>
                    <h1> Results:</h1>
                    <p> 
                        I'm currently working part time to finish the paper for this project, but we are very close to submission. I cannot share the code until the work is published, but I will update
                        this page when appropriate. 
                    </p>
                </div>,
        special: null,
        github: "https://github.com/kylesoni",
    },
    {
        name: "Mapping the Genetic Development Of Taste STEM Cells",
        image: Genes,
        skills: "Python, R, Excel",
        about: <div className='projectAbout'>
                <h1> About:</h1>
                    <p>
                        
                    </p>
                </div>,
        special: null,
        github: "https://github.com/kylesoni",
    },
]