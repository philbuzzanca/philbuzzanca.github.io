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
                <li>Social media website modeled after Twitter.</li>
                <li>Registered users can submit, delete, and like posts.</li>
                <li>Unique page for each post and its comments.</li>
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
                <li>Python, Django</li>
                <li>ChartJS</li>
                <li>AWS</li>
            </ul>
        )}
    />

    const hockeyEloFooter = (<>
        Hosted on <a href="https://www.hockeyelo.com">hockeyelo.com</a>.
    </>)

    const ungerrymanderSubheader = (<>
        Full stack Java web application.<br />
    </>)

    const ungerrymanderBody = <PortfolioBody
        image={hockey_elo_screenshot}
        body={(
            <ul>
                <li>algorithm</li>
            </ul>
        )}
    />

    const ungerrymanderFooter = (<>
        Source on <a href="https://github.com/philbuzzanca/gerrymander">GitHub</a>.
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
        <div className="portfolioJumbotron">
            <Jumbotron
                header={"Un-gerrymander"}
                body={ungerrymanderBody}
                subheader={ungerrymanderSubheader}
                footer={ungerrymanderFooter}
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
