import Jumbotron from "../components/Jumbotron"
import PortfolioBody from '../components/PortfolioBody';
import twitter_clone_screenshot from '../assets/twitter_clone_screenshot.png'
import hockey_elo_screenshot from '../assets/hockey_elo_screenshot.png'

const Portfolio = () => {

    const twitterCloneSubheader = (<>
        Full stack web application using MongoDB, Express, Node.js, GraphQL, and React.
    </>)

    const twitterCloneBody = <PortfolioBody
        image={twitter_clone_screenshot}
        body={(
            <ul>
                <li>
                    A React app designed to mimic the basic functionality of Twitter.
                </li>
                <li>
                    After registering an account, users can submit, like, and comment on text posts.
                </li>
                <li>
                    Users can also delete any posts or comments made by them.
                </li>
                <li>
                    Each user has their own unique page containing all of their posts, annd each
                    post has its own page containing its comments.
                </li>
            </ul>
        )}
    />

    const twitterCloneFooter = (<>
        Hosted on <a href="https://romantic-hawking-d9a38a.netlify.app/">Netlify</a>. Source on <a href="https://github.com/philbuzzanca/twitter-clone">GitHub</a>.
    </>)

    const hockeyEloSubheader = (<>
        Full stack web application using Django, Python, Bootstrap, PostgreSQL, and graph.<br />
    </>)

    const hockeyEloBody = <PortfolioBody
        image={hockey_elo_screenshot}
        body={(
            <ul>
                <li>
                    A django app that tracks the performance of the 32 teams in the National Hockey League.
                </li>
                <li>
                    Calculates a skill rating (elo) for every team based on the outcome of each game,
                    accounting for the matchup difficulty and goal differential.
                </li>
                <li>
                    Users can predict the outcome of any matchup using the matchup simulator, which
                    uses team elo ratings to calculate win probabilities.
                </li>
            </ul>
        )}
    />

    const hockeyEloFooter = (<>
        Hosted on <a href="https://www.hockeyelo.com">hockeyelo.com</a>.
    </>)

    const body = (<>
        <div className="portfolioJumbotron">
            <Jumbotron
                header={"Twitter Clone"}
                body={twitterCloneBody}
                subheader={twitterCloneSubheader}
                footer={twitterCloneFooter}
            />
        </div>
        <div className="portfolioJumbotron">
            <Jumbotron
                header={"Hockey Elo"}
                body={hockeyEloBody}
                subheader={hockeyEloSubheader}
                footer={hockeyEloFooter}
            />
        </div>
    </>)

    return (
        <div className="portfolioJumbotronContainer">
            <Jumbotron header={"Portfolio"} body={body} />
        </div>
    )
}

export default Portfolio
