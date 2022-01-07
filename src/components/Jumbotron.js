import Container from 'react-bootstrap/Container'

const Jumbotron = ({ header, body, subheader, footer, hr }) => {
    return (
        <Container className="p-3 jumbotronContainer">
            <Container className="p-5 mb-4 rounded-3 jumbotron">
                {header && (
                    (subheader) ? (
                        <>
                            <h2 className="header">{header}</h2>
                            <h6><i>{subheader}</i></h6>
                            <hr />
                        </>
                    ) : (
                        <>
                            <h1 className="header"><strong>{header}</strong></h1>
                            {hr && <hr />}
                        </>
                    )
                )}
                {body}
                {footer && (
                    <div className="footer">
                        <br />
                        <hr />
                        <i><h6>{footer}</h6></i>
                    </div>
                )}
            </Container>
        </Container>
    )
}

export default Jumbotron
