import Container from 'react-bootstrap/Container'

const Jumbotron = ({ header, body }) => {
    return (
        <Container className="p-3">
            <Container className="p-5 mb-4 rounded-3 jumbotron">
                {header && (
                    <>
                        <h1 clasName="header">{header}</h1>
                        <hr />
                    </>
                )}
                {body}
            </Container>
        </Container>
    )
}

export default Jumbotron
