import Container from 'react-bootstrap/Container'

const Jumbotron = ({ header, body, subheader }) => {
    return (
        <Container className="p-3">
            <Container className="p-5 mb-4 rounded-3 jumbotron">
                {header && (
                    (subheader) ? (
                        <>
                            <h2 clasName="header">{header}</h2>
                            {subheader && (<h6><i>{subheader}</i></h6>)}
                            <hr />
                        </>
                    ) : (
                        <>
                            <h1 clasName="header">{header}</h1>
                            <hr />
                        </>
                    )
                )
                }
                {body}
            </Container>
        </Container>
    )
}

export default Jumbotron
