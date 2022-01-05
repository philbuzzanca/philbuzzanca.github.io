import Jumbotron from "../components/Jumbotron"

const Portfolio = () => {

    const socialMediaAppBody = (<ul>
        <li>MongoDB database</li>
        <li>Apollo GraphQL</li>
        <li>Express and Node.js</li>
        <li>Responsive front end in react</li>
    </ul>)

    const socialMediaAppSubheader = (<>
        Full stack web application using MongoDB, Express, Node.js, GraphQL, and React. (Hosted <a href="https://google.com">here</a>, code <a href="https://github.com">here</a>.)
    </>)

    const hockeyEloBody = (<ul>
        <li>Python, Django</li>
        <li>ChartJS</li>
        <li>AWS</li>
    </ul>)

    const hockeyEloSubheader = (<>
        Full stack web application using Django, Python, Bootstrap, PostgreSQL, and graph. Hosted on <a href="https://www.hockeyelo.com">hockeyelo.com</a>.
    </>)

    const body = (<>
        <div className="portfolioJumbotron">
            <Jumbotron header={"Social Media App"} body={socialMediaAppBody} subheader={socialMediaAppSubheader} />
        </div>
        <div className="portfolioJumbotron">
            <Jumbotron header={"Hockey Elo"} body={hockeyEloBody} subheader={hockeyEloSubheader} />
        </div>
    </>)
    return (
        <>
            <Jumbotron header={"Portfolio"} body={body} />
        </>
    )
}

export default Portfolio
