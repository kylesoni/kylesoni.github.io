import Network from '../assets/network.png'
import Genes from '../assets/genetics.jpg'
import BAfig1 from '../assets/figures/updated_deg_dist.png'
import BAfig2 from '../assets/figures/updated_max_degree_twos.png'
import TFfig1 from '../assets/figures/umap.png'

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
                        A preferential attachment model starts with a simple graph (e.g. three fully connected nodes), and adds new nodes one at a time. The way the node connects
                        to existing nodes is based on a user-defined probability distribution. The most famous example of this model is the <b>Barabasi-Albert</b> (BA) model, where a node 
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
                        For the alpha models, I used some tricks with grouping nodes that don't affect time complexity but greatly decreased the practical runtime. This allowed us to generate networks
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
                        This project was part of the Kovacs Lab at Northwestern University, collaborating with neurobiologists from the Lee Lab at Northwestern University. We studied the developmental pathway
                        of taste receptor cells (TRCs), seeking to understand what mechanism causes stem cells to differentiate into their specialized types (specifically sweet and bitter). They acquired single-cell
                        RNA sequencing data for hundreds of thousands of cells from mice, so our group handled the computational analysis of the data.
                    </p>
                    <p> 
                        Our main goal was to identify certain <b>transcription factors</b> (TFs) that were responsible for the differentiation. TFs are proteins that control the expression of a specific gene,
                        so the biologists suspected that we would find likely candidates. Since the TFs are only expressed during the differentiation process, it was impossible to observe their expression directly,
                        necessitating the use of more complex methods.
                    </p>
                    <h1> Technical Details:</h1>
                    <p>
                        The first step was identifying the distinct cell types (stem, sweet, and bitter) by a combination of visualization and genetic markers. I used a combination of Principal Component analysis
                        and UMAP to create the visualization shown below. Using known genetic markers for each group, we found that the top left cluster was the location of the taste receptor cells. This gave us
                        confidence to use these groups of sweet, bitter, and stem cells as inputs to our analytical methods.
                    </p>
                    <img src={TFfig1} alt="" className='figure'/>
                    <p>
                        To reverse engineer the TF expression, we used TF-gene regulatory networks from <a href='https://www.grnpedia.org/trrust/'>TRRUST</a>. Since we had the gene expression,
                        we inverted the adjacency matrix using ridge regression and multiplied it with our expression data. This gives us an output vector that contains more extreme values for more important TFs.
                        After comparing this vector with random permutations, we isolated the significant TFs from the noise and found our candidates.
                    </p>
                    <p>
                        In simple terms, we worked backwards from mature cell expression data to find what TFs caused the current expression.
                    </p>
                    <h1> Results:</h1>
                    <p> 
                        We found 12 TFs that had statistical significance. While this work is not published at this time, the biologists are incorporating
                        our results into their future experiments, providing needed confirmation for the validity of these candidates.
                    </p>
                </div>,
        special: null,
        github: "https://github.com/kylesoni",
    },
]