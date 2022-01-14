import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const PortfolioBody = ({ image, body }) => {

    return (<Container>
        <Row>
            <Col md={12} lg={6}>
                <Image
                    src={image}
                    className="portfolioImage"
                    width="100%"
                    style={{marginLeft: "0"}}
                />
            </Col>
            <Col md={12} lg={6}>
                {body}
            </Col>
        </Row>
    </Container>)
}

export default PortfolioBody
