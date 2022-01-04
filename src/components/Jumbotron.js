import Container from 'react-bootstrap/Container'

const Jumbotron = ({ header, body, hr }) => {
    return (
        <Container className="p-3">
            <Container className="p-5 mb-4 rounded-3 jumbotron">
                <h1 clasName="header">{header}</h1>
                {hr && <hr />}
                {body}
            </Container>
        </Container>
    )
}

export default Jumbotron
